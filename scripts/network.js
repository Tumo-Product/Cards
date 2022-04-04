const network = {
    getSet: async () => {
        let url = new URL(document.location.href);
        let lan = url.searchParams.get("lan");
        let id  = url.searchParams.get("id");

        let data = await axios.get(config.query +`?language=${lan}&name=${id}`);
        return data.data.set;
    }
}