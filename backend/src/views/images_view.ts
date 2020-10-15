import Images from "../models/Image"

export default {
    render(image: Images){
        const BASE_URL = process.env.BASE_URL || 'https://localhost:8080'
        const url = `${BASE_URL}/assets/uploads/${image.path}`
        return {
            id: image.id,
            url 
        }
    },
    
    renderMany(images: Images[]){
        return images.map(image=>this.render(image))
    }
}