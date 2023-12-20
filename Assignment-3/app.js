let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
]

// Get reference to elements
const renderData = document.getElementById('render_data');


function changevalue(select) {
    const selectedValue = select.value
    // console.log(selectedValue)

    renderData.innerHTML = '';
  const filtered_array =  arr.filter((current_object, current_index) => {
        const { brand, model, price, camera, ram, rom } = current_object
        if (brand === selectedValue) {
            // return current_object
                renderData.innerHTML += `
                <ul>
            <li>Brand : ${brand}</li>
            <li>Model : ${model}</li>
            <li>Price : ${price}</li>  
            <li>Camera: ${camera}</li>
            <li>Ram   : ${ram}</li>
            <li>Rom   : ${rom}</li>
            </ul>

            `
        }
    })
    console.log(filtered_array)
}