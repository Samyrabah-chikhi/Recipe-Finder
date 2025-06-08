const API_KEY2 = "?apiKey=8fef86c7107b43d5a28f98a6892bbbfb"
const API_KEY = "?apiKey=fac6786a19f44f058c604ebaacda6a73"
const BASE_URL = "https://api.spoonacular.com/recipes"

export const getRandomRecipes = async (number = 1) => {
    const response = await fetch(`${BASE_URL}/random${API_KEY}&number=${number}`)
    const data = await response.json()
    console.log(data)
    return data.recipes
}

export const getSpecificRecipes = async(name,number=12) => {
    
    const reponse = await fetch(`${BASE_URL}/complexSearch${API_KEY}&query=${name}&number=${number}`)
    const data = await reponse.json()
    console.log("name: " + name)
    console.log(data)
    return data.results
}