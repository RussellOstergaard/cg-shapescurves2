class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        // Draws first bezier curve
        this.drawBezierCurve({x: 50, y: 300}, {x: 50, y: 500}, {x: 350, y:500}, {x:350,y:300}, (this.num_curve_sections-2)/2, [255, 0, 0, 255], framebuffer);
        // Draws Second Bezier curve
        this.drawBezierCurve({x: 350, y: 300}, {x:350, y:100}, {x:650, y:100}, {x:650,y:300}, (this.num_curve_sections-2)/2, [255, 0, 0, 255], framebuffer);

        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        // this.drawLine({x: 100, y: 300}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        this.drawCircle({x:100, y:300}, 50, this.num_curve_sections, [255, 0, 0, 255], framebuffer);

        this.drawCircle({x:500, y:300}, 100, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        //Polygon 1 
        let point_1 = {x: 80, y: 100};
        let point_2 = {x: 100, y: 130};
        let point_3 = {x: 139, y: 200};
        let point_4 = {x: 155, y: 143};
        let point_5 = {x: 176, y: 130};
        this.drawTriangle(point_1, point_2, point_3, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_3, point_4, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_4, point_5, [0, 128, 128, 255], framebuffer);

        if(this.show_points == true){
            this.drawVertex(point_1, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_2, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_3, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_4, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_5, [255, 165, 0, 255], framebuffer);
        }

        // Polygon 2
        point_1 = {x: 480, y: 200};
        point_2 = {x: 400, y: 160};
        point_3 = {x: 439, y: 340};
        point_4 = {x: 465, y: 375};
        point_5 = {x: 536, y: 540};
        let point_6 = {x: 560, y: 340};
        let point_7 = {x: 600, y: 160};
        this.drawTriangle(point_1, point_2, point_3, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_3, point_4, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_4, point_5, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_5, point_6, [0, 128, 128, 255], framebuffer);
        this.drawTriangle(point_1, point_6, point_7, [0, 128, 128, 255], framebuffer);

        if(this.show_points == true){
            this.drawVertex(point_1, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_2, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_3, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_4, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_5, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_6, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_7, [255, 165, 0, 255], framebuffer);
        }
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        //let point_a = {x:  80, y:  40};
        //let point_b = {x: 320, y: 160};
        //let point_c = {x: 240, y: 360};
        //this.drawTriangle(point_a, point_c, point_b, [0, 128, 128, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        let color = [0, 128, 128, 255];
        // top polygon for R
        let point_1 = {x: 100, y:200};
        let point_2 = {x: 100, y:300};
        let point_3 = {x: 150, y:270};
        let point_4 = {x: 200, y:240};
        let point_5 = {x: 200, y:200};
        this.drawTriangle(point_1, point_2, point_3, color, framebuffer);
        this.drawTriangle(point_1, point_3, point_4, color, framebuffer);
        this.drawTriangle(point_1, point_4, point_5, color, framebuffer);

        // lines for the R
        let p1 = {x:100, y:50};
        let p2 = {x:200, y:50};
        this.drawLine(point_1, p1, color, framebuffer);
        this.drawLine(point_1, p2, color, framebuffer);

        // draws a belzier curve for the u
        let up1 = {x:225, y:150}; 
        let up2 = {x:225, y:50};
        let up3 = {x:275, y:50};
        let up4 = {x:275, y:150};
        this.drawBezierCurve(up1, up2, up3, up4, this.num_curve_sections, color, framebuffer);

        // draws s's
        for(let i = 0; i <= 75; i+= 75){
            let sp1 = {x:350 + i, y:150};
            let sp2 = {x:300 + i, y:150};
            let sp3 = {x:300 + i, y:100};
            let sp4 = {x:350 + i, y:100};
            let sp5 = {x:350 + i, y:50};
            let sp6 = {x:300 + i, y:50};
            this.drawLine(sp1, sp2, color,framebuffer);
            this.drawLine(sp2, sp3, color,framebuffer);
            this.drawLine(sp3, sp4, color,framebuffer);
            this.drawLine(sp4, sp5, color,framebuffer);
            this.drawLine(sp5, sp6, color,framebuffer);
            if(this.show_points == true){
                this.drawVertex(sp1, [255, 165, 0, 255], framebuffer)
                this.drawVertex(sp2, [255, 165, 0, 255], framebuffer)
                this.drawVertex(sp3, [255, 165, 0, 255], framebuffer)
                this.drawVertex(sp4, [255, 165, 0, 255], framebuffer)
                this.drawVertex(sp5, [255, 165, 0, 255], framebuffer)
                this.drawVertex(sp6, [255, 165, 0, 255], framebuffer)
            }
        }
        
        // draws the o
        this.drawCircle({x:625, y: 150}, 150, this.num_curve_sections, color, framebuffer);

        if(this.show_points == true){
            this.drawVertex(point_1, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_2, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_3, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_4, [255, 165, 0, 255], framebuffer);
            this.drawVertex(point_5, [255, 165, 0, 255], framebuffer);
            this.drawVertex(p1, [255, 165, 0, 255], framebuffer);
            this.drawVertex(p2, [255, 165, 0, 255], framebuffer);
        }
        
        
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        
        let t = 1.0/num_edges;
        console.log("t-value");
        console.log(t);
        let p4 = p0;
        if(this.show_points == true){
            this.drawVertex(p0, [255, 165, 0, 255], framebuffer);
        }
        for(let i = t; i <= 1; i+=t){
            let i2 = 1-i;
            let pow3 = (Math.pow(i2, 3))
            let pow2 = (Math.pow(i2, 2))
            let ipow2 = (Math.pow(i,2))
            let ipow3 = (Math.pow(i,3))
            let x = pow3 * p0.x + (3 * pow2 * t * p1.x) + (3 * i2 * ipow2 * p2.x) + (ipow3 * p3.x);
            //console.log("x-value");
            //console.log(x);
            let y = ((Math.pow(i2, 3)) * p0.y) + (3 * (Math.pow(i2, 2)) * t * p1.y) + (3 * i2 * (Math.pow(i,2)) * p2.y) + ((Math.pow(i,3)) * p3.y);
            //console.log("y-value");
            let p5 = {x:Math.round(x), y:Math.round(y)};
            //console.log(y);
            this.drawLine(p4, p5, color, framebuffer);
            if(this.show_points == true){
                this.drawVertex(p5, [255, 165, 0, 255], framebuffer);
            }
            p4 = p5;
        }
        
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let sections = 360/num_edges;
        let point = 0;
        let p0 = null;
        for(let i = 0; i <= num_edges; i++){
            let x = center.x + (radius * Math.cos((point * Math.PI)/180));
            let y = center.y + (radius * Math.sin((point * Math.PI)/180));
            point+=sections;
            if(p0 == null){
                p0 = {x: Math.round(x), y: Math.round(y)};
                if(this.show_points == true){
                    this.drawVertex(p0, [255, 165, 0, 255], framebuffer);
                }
            }
            else{
                this.drawLine(p0, {x: Math.round(x), y: Math.round(y)}, color, framebuffer);
                p0 = {x: Math.round(x), y: Math.round(y)};
                if(this.show_points == true){
                    this.drawVertex(p0, [255, 165, 0, 255], framebuffer);
                }
            }
        }
        
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        let x1 = v.x + 10;
        let x2 = v.x - 10;
        let y3 = v.y + 10;
        this.drawTriangle({x:x1, y:v.y}, {x:x2, y:v.y}, {x:v.x , y:y3 }, color, framebuffer)
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
