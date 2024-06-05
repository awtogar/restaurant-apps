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