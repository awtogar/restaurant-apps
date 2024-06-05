// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// const target = path.resolve(__dirname, 'src/public/images/heros/hero-image_3.jpg');
// const destination = path.resolve(__dirname, 'dist/images');

// if (!fs.existsSync(destination)) {
//     fs.mkdirSync(destination);
// }

// fs.readdirSync(target).forEach((image) => {
//     if (image.includes('hero-image_3.jpg')) {
//         sharp(`${target}/${image}`)
//         .resize(1200)
//         // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -1200.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-1200.jpg`,
//                 ),
//             );
//             sharp(`${target}/${image}`)
//             .resize(1024)
//             // mengubah ukuran gambar dengan lebar 1024px, dengan prefix -1000.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-1024.jpg`,
//                 ),
//             );

//             sharp(`${target}/${image}`)
//             .resize(768)
//             // mengubah ukuran gambar dengan lebar 768px, dengan prefix -800.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-768.jpg`,
//                 ),
//             );

//             sharp(`${target}/${image}`)
//             .resize(568)
//             // mengubah ukuran gambar dengan lebar 568px, dengan prefix -568.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-568.jpg`,
//                 ),
//             );
//         sharp(`${target}/${image}`)
//             .resize(368)
//             // mengubah ukuran gambar dengan lebar 368px, dengan prefix -368.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-368.jpg`,
//                 ),
//             );

//     } else {
//         sharp(`${target}/${image}`)
//             .resize(286)
//             // mengubah ukuran gambar dengan lebar 286px, dengan prefix -286.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-286.jpg`,
//                 ),
//             );
//         sharp(`${target}/${image}`)
//             .resize(200)
//             // mengubah ukuran gambar dengan lebar 200px, dengan prefix -200.jpg
//             .toFile(
//                 path.resolve(
//                     __dirname,
//                     `${destination}/${image.split('.').slice(0, -1).join('.')}-200.jpg`,
//                 ),
//             );
//     }
// });


const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros/hero-image_3.jpg');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

// Atur ukuran gambar yang diinginkan dan simpan dengan nama yang sesuai
const sizes = [1200, 1024, 768, 568, 368, 286, 200];
sizes.forEach(size => {
    sharp(target)
        .resize(size)
        .toFile(
            path.resolve(
                destination,
                `hero-image_3-${size}.jpg`,
            ),
        );
});