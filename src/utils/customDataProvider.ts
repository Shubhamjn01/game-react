import nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";

export const customDataProvider = (apiUrl: string, httpClient: any) => {
  const baseDataProvider = nestjsxCrudDataProvider(apiUrl, httpClient);
  return {
    ...baseDataProvider,
    getList: async (resource: any) => {
      if (resource && resource?.resource == "Users") {
        const response = await httpClient.get(`${apiUrl}/${resource.resource}`);

        const newData = response.data.data?.map((item: any) => ({
          ...item,
          fullName: item?.firstName + " " + item?.lastName,
        }));

        return { data: newData, total: response.data.total };
      }

      if (resource && resource?.resource == "Character") {
        const response = await httpClient.get(`${apiUrl}/${resource.resource}`);

        const newData = response?.data.data.map((item: any) => {
          return {
            ...item,
            characterData: JSON.stringify(item?.characterData),
          };
        });

        return { data: newData, total: response.data.total };
      }
      if (resource && resource?.resource === "CharacterByUser") {
        const { filters } = resource;
        // console.log("resource object:", resource);
    
        let response;
        if (filters.length > 0) {
            try {
                response = await httpClient.get(`${apiUrl}/Character/user`, {
                    params: { user: filters[0].value }
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                return { data: [], total: 0 };
            }
        } else {
            console.warn("Filters array is empty");
            return { data: [], total: 0 };
        }
    
        if (response && response.data) {
            const newData = response.data.data.map((item: any) => {
                return {
                    ...item,
                    characterData: JSON.stringify(item?.characterData),
                };
            });
    
            return { data: newData, total: response.data.total };
        } else {
            console.error("Response or response.data is undefined");
            return { data: [], total: 0 };
        }
    }
    
      if (resource && ["region", "zone", "entry", "tag", "type","attribute"].includes(resource.resource)) {
        // Extract filters from params
        const { filters } = resource;
        console.log(filters)
        // Build query string for filters
        let query = '';
        let endpoint = `${apiUrl}/${resource.resource}`;
        if (filters && filters.length > 0 && filters[0].value.length >0) {
            query = filters.map((filter: any) => `${filter.field}=${filter.value}`).join('&');
            // Change endpoint if filters are present
            endpoint = `${apiUrl}/search/${resource.resource}`;
        }

        const response = await httpClient.get(`${endpoint}?${query}`);
        return { data: response.data.data, total: response.data.total };
    }
 
      return baseDataProvider.getList(resource);
    },
    getOne: async ({ resource, id }: any) => {
      if (resource == "Map") {
        const response = await httpClient.get(`${apiUrl}/${resource}/${id}`);

        let tags = response?.data?.tagsOfTypeCulture?.map(
          (item: any) => item?.tagId
        );

        const data = {
          ...response.data,
          tagsOfTypeCulture: tags,
        };

        return { data };
      }

      if (resource && resource == "Character") {
        const response = await httpClient.get(`${apiUrl}/${resource}/${id}`);

        const data = {
          ...response.data,
          characterData: JSON.stringify(response.data?.characterData),
        };
        return { data };
      }

      return baseDataProvider.getOne({ resource, id });
    },
    deleteOne: async (resource: any) => {
      if (
        resource &&
        (resource.resource === "zoneimages" ||
          resource.resource === "entryimages" ||
          resource.resource === "regionimages" ||
          resource.resource === "image")
      ) {
        const response = await httpClient.delete(
          `${apiUrl}/image/${resource.id}`
        );
        return { data: response.data };
      }

      return baseDataProvider.deleteOne(resource);
    },
    create: (resource: any) => {
      if (
        (resource && resource.resource == "zone") ||
        // resource.resource == "entry" ||
        resource.resource == "region" ||
        resource.resource == "Groups" ||
        resource.resource == "dungeons"
      ) {
        let attributes = resource?.variables?.attributes.map((id: any) => ({
          attributeId: id,
          value: resource?.variables?.attributeValue,
        }));

        return baseDataProvider.create({
          ...resource,
          variables: { ...resource?.variables, attributes },
        });
      }
      if (resource && resource?.resource == "Character") {
        const characterData = resource?.variables?.characterData;
        return baseDataProvider.create({
          ...resource,
          variables: {
            ...resource?.variables,
            characterData: JSON.parse(characterData),
          },
        });
      }

      if (resource && resource?.resource == "Map") {
        return baseDataProvider.create({
          ...resource,
          variables: {
            ...resource?.variables,
            populationLimit: Number(resource?.variables?.populationLimit),
            currentPopulation: Number(resource?.variables?.currentPopulation),
          },
        });
      }

      return baseDataProvider.create(resource);
    },

    update: (resource: any) => {
      if (
        (resource && resource.resource == "zone") ||
        // resource.resource == "entry" ||
        resource.resource == "region" ||
        resource.resource == "Groups" ||
        resource.resource == "dungeons"
      ) {
        let attributes = resource?.variables?.attributeId.map((id: any) => ({
          attributeId: id,
          value: resource?.variables?.attributeValue,
        }));

        return baseDataProvider.update({
          ...resource,
          variables: {
            ...resource?.variables,
            attributes,
            tags: resource?.variables?.tagId,
            InquiryPhases: resource?.variables?.InquiryPhases
          },
        });
      }
      if (resource && resource?.resource == "Character") {
        const characterData = resource?.variables?.characterData;
        return baseDataProvider.update({
          ...resource,
          variables: {
            ...resource?.variables,
            characterData: JSON.parse(characterData),
            clusterId: resource?.variables?.clusterID,
          },
        });
      }
      if (resource && resource?.resource == "entry") {
        
        let attributes = resource?.variables?.attributes.map((attribute: any) => ({
          ...attribute,
          value: attribute.Value,
        }));
        return baseDataProvider.update({
          ...resource,
          variables: {
            ...resource?.variables,
            attributes,
            tags: resource?.variables?.tagId,
            InquiryPhases: resource?.variables?.InquiryPhases
          },
        });
      }
      return baseDataProvider.update(resource);
    },
  };
};
