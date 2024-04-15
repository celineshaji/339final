const header = (sketch) => {
    let img;
    let scale = 5.0;
    let depth = 3;
    let outline = false;

     sketch.preload = () => {
        img = sketch.loadImage("images/header.png");
        depthmap = sketch.loadImage("images/sprite_depth_map.png");
    }

    sketch.setup = () => {
        let canvas = sketch.createCanvas(img.width * scale, img.height * scale, sketch.WEBGL);
        canvas.parent("p5-header");
        img.loadPixels();
        depthmap.loadPixels();
        sketch.angleMode(sketch.DEGREES);
    }

    sketch.draw = () => {
        sketch.orbitControl(1, 1, 0);
        sketch.rotateY(15);
        sketch.background(255);
        sketch.translate(-scale * (img.width / 2), -scale * (img.height / 2));
        for (let col = 0; col < img.height; col += 1) {
            for (let row = 0; row < img.width; row += 1) {
                let idx = (row + (col * img.width)) * 4;
                if (img.pixels[idx + 3] !== 0) {
                    sketch.fill(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    if (outline === false) {
                        sketch.stroke(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    }
                    sketch.push()
                    let rrow = sketch.ceil(row - (img.width/2));
                    let angle = -28 * sketch.sin(sketch.frameCount);
                    let r = (rrow * scale);
                    let delta_z = r * sketch.sin(angle);
                    let delta_x = r - (delta_z / sketch.tan(angle));
                    sketch.translate(-delta_x, 0, delta_z)
                    sketch.rotateY(-angle);
                    sketch.box(scale, scale, (((depthmap.pixels[idx] / 32) * 2) + 1) * scale);
                    sketch.pop()
                }
                sketch.translate(scale, 0);
            }
            sketch.translate(-scale * img.width, scale);
        }
    }
}

const books = (sketch) => {
    let img;
    let scale = 3.0;
    let depth = 3;
    let outline = false;

     sketch.preload = () => {
        img = sketch.loadImage("images/book.png");
        depthmap = sketch.loadImage("images/sprite_depth_map.png");
    }

    sketch.setup = () => {
        let canvas = sketch.createCanvas(img.width * scale, img.height * scale, sketch.WEBGL);
        canvas.parent("p5-books");
        img.loadPixels();
        depthmap.loadPixels();
        sketch.angleMode(sketch.DEGREES);
    }

    sketch.draw = () => {
        // sketch.orbitControl(1, 1, 0);
        sketch.rotateY(15);
        sketch.background(255);
        sketch.translate(-scale * (img.width / 2), -scale * (img.height / 2));
        for (let col = 0; col < img.height; col += 1) {
            for (let row = 0; row < img.width; row += 1) {
                let idx = (row + (col * img.width)) * 4;
                if (img.pixels[idx + 3] !== 0) {
                    sketch.fill(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    if (outline === false) {
                        sketch.stroke(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    }
                    sketch.push()
                    let rrow = sketch.ceil(row - (img.width/2));
                    let angle = -28 * sketch.sin(sketch.frameCount);
                    let r = (rrow * scale);
                    let delta_z = r * sketch.sin(angle);
                    let delta_x = r - (delta_z / sketch.tan(angle));
                    sketch.translate(-delta_x, 0, delta_z)
                    sketch.rotateY(-angle);
                    sketch.box(scale, scale, (((depthmap.pixels[idx] / 32) * 2) + 1) * scale);
                    sketch.pop()
                }
                sketch.translate(scale, 0);
            }
            sketch.translate(-scale * img.width, scale);
        }
    }
}

const movies = (sketch) => {
    let img;
    let scale = 3.0;
    let depth = 3;
    let outline = false;

     sketch.preload = () => {
        img = sketch.loadImage("images/movies.png");
        depthmap = sketch.loadImage("images/sprite_depth_map.png");
    }

    sketch.setup = () => {
        let canvas = sketch.createCanvas(img.width * scale, img.height * scale, sketch.WEBGL);
        canvas.parent("p5-movies");
        img.loadPixels();
        depthmap.loadPixels();
        sketch.angleMode(sketch.DEGREES);
    }

    sketch.draw = () => {
        // sketch.orbitControl(1, 1, 0);
        sketch.rotateY(15);
        sketch.background(255);
        sketch.translate(-scale * (img.width / 2), -scale * (img.height / 2));
        for (let col = 0; col < img.height; col += 1) {
            for (let row = 0; row < img.width; row += 1) {
                let idx = (row + (col * img.width)) * 4;
                if (img.pixels[idx + 3] !== 0) {
                    sketch.fill(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    if (outline === false) {
                        sketch.stroke(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    }
                    sketch.push()
                    let rrow = sketch.ceil(row - (img.width/2));
                    let angle = -28 * sketch.sin(sketch.frameCount);
                    let r = (rrow * scale);
                    let delta_z = r * sketch.sin(angle);
                    let delta_x = r - (delta_z / sketch.tan(angle));
                    sketch.translate(-delta_x, 0, delta_z)
                    sketch.rotateY(-angle);
                    sketch.box(scale, scale, (((depthmap.pixels[idx] / 32) * 2) + 1) * scale);
                    sketch.pop()
                }
                sketch.translate(scale, 0);
            }
            sketch.translate(-scale * img.width, scale);
        }
    }
}

const music = (sketch) => {
    let img;
    let scale = 3.0;
    let depth = 3;
    let outline = false;

     sketch.preload = () => {
        img = sketch.loadImage("images/music.png");
        depthmap = sketch.loadImage("images/sprite_depth_map.png");
    }

    sketch.setup = () => {
        let canvas = sketch.createCanvas(img.width * scale, img.height * scale, sketch.WEBGL);
        canvas.parent("p5-music");
        img.loadPixels();
        depthmap.loadPixels();
        sketch.angleMode(sketch.DEGREES);
    }

    sketch.draw = () => {
        // sketch.orbitControl(1, 1, 0);
        sketch.rotateY(15);
        sketch.background(255);
        sketch.translate(-scale * (img.width / 2), -scale * (img.height / 2));
        for (let col = 0; col < img.height; col += 1) {
            for (let row = 0; row < img.width; row += 1) {
                let idx = (row + (col * img.width)) * 4;
                if (img.pixels[idx + 3] !== 0) {
                    sketch.fill(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    if (outline === false) {
                        sketch.stroke(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
                    }
                    sketch.push()
                    let rrow = sketch.ceil(row - (img.width/2));
                    let angle = -28 * sketch.sin(sketch.frameCount);
                    let r = (rrow * scale);
                    let delta_z = r * sketch.sin(angle);
                    let delta_x = r - (delta_z / sketch.tan(angle));
                    sketch.translate(-delta_x, 0, delta_z)
                    sketch.rotateY(-angle);
                    sketch.box(scale, scale, (((depthmap.pixels[idx] / 32) * 2) + 1) * scale);
                    sketch.pop()
                }
                sketch.translate(scale, 0);
            }
            sketch.translate(-scale * img.width, scale);
        }
    }
}



let headerP5 = new p5(header, 'p5header');
let booksP5 = new p5(books, 'p5books');
let moviesP5 = new p5(movies, 'p5movies');
let musicP5 = new p5(music, 'p5music');