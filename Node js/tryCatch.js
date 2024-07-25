const getdata = async ()=> {
    try{
        const response = await fetch('https://dummyjson.com/products')
        datas = await response.json(); //data is in object(binary) format =====> json format
        console.log(datas);
    }catch(error){
        console.log(error);
    }
};
const main = async () =>{
    await getdata();
}
main();