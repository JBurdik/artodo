import cloudinary from 'cloudinary';



export async function DELETE(req: Request) {
    const body = await req.json()

    cloudinary.v2.config({
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME
    })

    cloudinary.v2.uploader.destroy(body.publicId).then(result => console.log(result));

    // const result = await fetch('https://api.cloudinary.com/v1_1/demo/image/destroy', {
    //     method: "POST",
    //     body: JSON.stringify({
    //         public_id: body.publicId,
    //         api_key: process.env.CLOUDINARY_API_KEY
    //     })
    // })
    return new Response(JSON.stringify('ok'))
}