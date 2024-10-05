
// get All data 
export async function getAllData(url) {
    try {
        const response = await axios.get(url);
        console.log("STATUS CODE: ", response.status);
        return response.data;
    }
    catch (error) {
        console.log(error.message);
    }
}
// get data by id
export async function getDataById(url,id) {
    try {
        const response = await axios.get(`${url}?id=${id}`);
        console.log("STATUS CODE: ", response.status);
        return response.data;

    }
    catch (error) {
        console.log(error.message);

    }
}

// delete data by id

export async function deleteDataById(url,id){
    try{
        const response=await axios.delete(`${url}/${id}`);
        console.log("STATUS CODE: ", response.status);
        return response.data;

    }
    catch (error) {
        console.log(error.message);

    }
}

// add movie to data
export async function addData(url, data) {
    try {
        const response = await axios.post(url, data); // Change PUT to POST
        console.log("Add STATUS CODE: ", response.status);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
// update movie data
export async function updateDataById(url, id, updatedData) {
    try {
        const response = await axios.put(`${url}/${id}`, updatedData);
        console.log("Update STATUS CODE: ", response.status);
        console.log("Updated Data Response: ", response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}