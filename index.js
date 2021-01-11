// Start div opcion1.
var texto_figuras = document.getElementById("texto_figuras");
// End div opcion1.

// Start div opcion2
var texto_cantidad = document.getElementById("texto_cantidad");
var boton_cantidad = document.getElementById("boton_cantidad");
boton_cantidad.addEventListener("click", dibujarClick);
// End div opcion2.

// Start se trabaja con el canvas
var p = document.getElementById("canvas_papel");
var papel = p.getContext("2d");
var colorTrazo = "red";
var anchoCanvas = p.width;
var altoCanvas = p.height;
var origenX = 0;
var origenY = 0;
// End se trabaja con el canvas

function dibujarClick(cantidad_figuras) {
  var opcion = parseInt(texto_figuras.value);
  var cantidad_figuras = parseInt(texto_cantidad.value);
  if (cantidad_figuras > 0 && cantidad_figuras < 401) {
    papel.clearRect(origenX, origenY, anchoCanvas, altoCanvas);
    console.log("El valor de la varia opcion es: " + opcion);
    if (opcion == 1) {
      cuadrados();
      function cuadrados() {
        var colorTrazo = "red";
        var xi, yi, ancho, largo, contador, indicadorCuadradito;
        var cuadraditos, indicadorxi;
        xi = 2.5;
        yi = 0;
        ancho = 10;
        largo = ancho;
        cuadraditos = 0;
        indicadorCuadradito = true;
        indicadorxi = true;
        indicadorxi = true;
        for (contador = 0; contador < cantidad_figuras*2; contador++) {
          if (xi > 299) {
            indicadorxi = false;
            console.log("El valor del indicadorXi es: " + indicadorxi);
            xi = 2.5;
            yi = yi + 15;
            indicadorCuadradito = true;
            indicadorxi = true;
            console.log("El valor de yi: " + yi);
          }
          if (indicadorCuadradito == true && indicadorxi == true) {
            indicadorCuadradito = false;
            dibujoCanvasCuadraditos(colorTrazo, xi, yi, ancho, largo);
            cuadraditos++;
            console.log("Número de cuadradito: " + cuadraditos);
          } 
            else if (indicadorxi == true) {
                xi = xi + 15;
                indicadorCuadradito = true;
                console.log("El valor de xi: " + xi);
            }
        }
      }
      function dibujoCanvasCuadraditos(colorLinea, xinicial, yinicial, anchoCuadrado, altoCuadrado) {
        papel.beginPath();
        papel.strokeStyle = colorLinea;
        papel.strokeRect(xinicial, yinicial, anchoCuadrado, altoCuadrado);
        papel.closePath();
      }
    } else
        if (opcion == 2) {
          triangulos();
          function triangulos() {
            var xi, yi, xf, yf, cl, ct, ict;
            var indicadorEjeX;
            ict = 0;
            for (ct = 1; ct <= cantidad_figuras; ct++) {
              indicadorEjeX = false;
              ict++;
              if (ct == 21 || ct == 41 || ct == 61 || ct == 81 || ct == 101 || ct == 121 || ct == 141 || ct == 161 || ct == 181 || ct == 201 || ct == 221 || ct == 241 || ct == 261 || ct == 281 || ct == 301 || ct == 321 || ct == 341 || ct == 361 || ct == 381) {
                indicadorEjeX = true;
              }
              if (indicadorEjeX == true) {
                ict = 1;
                indicadorEjeX = false;
              }
              for (cl = 0; cl <= 2; cl++) {
                if (ict == 1) {
                  xi = 5 * cl;
                  xf = 5 * (cl + 1);
                } else {
                    xi = 5 * cl + 15 * (ict - 1);
                    xf = 5 * (cl + 1) + 15 * (ict - 1);
                  }
          
                if (ct <= 20) {
                  yi = 10;
                  yf = 0;
                } else 
                    if (ct > 20 && ct < 41) {
                      yi = 25;
                      yf = 15;
                    } else 
                        if (ct > 40 && ct < 61) {
                          yi = 40;
                          yf = 30;
                        } else 
                            if (ct > 60 && ct < 81) {
                              yi = 55;
                              yf = 45;
                            } else 
                                if (ct > 80 && ct < 101) {
                                    yi = 70;
                                    yf = 60;
                                } else 
                                    if (ct > 80 && ct < 101) {
                                      yi = 70;
                                      yf = 60;
                                    } else 
                                        if (ct > 100 && ct < 121) {
                                          yi = 85;
                                          yf = 75;
                                        } else
                                            if (ct > 120 && ct < 141) {
                                              yi = 100;
                                              yf = 90;
                                            } else
                                                if (ct > 140 && ct < 161) {
                                                  yi = 115;
                                                  yf = 105;
                                                } else
                                                    if (ct > 160 && ct < 181) {
                                                      yi = 130;
                                                      yf = 120;
                                                    } else
                                                        if (ct > 180 && ct < 201) {
                                                          yi = 145;
                                                          yf = 135;
                                                        } else
                                                            if (ct > 180 && ct < 201) {
                                                              yi = 145;
                                                              yf = 135;
                                                            } else 
                                                                if (ct > 200 && ct < 221) {
                                                                  yi = 160;
                                                                  yf = 150;
                                                                } else 
                                                                    if (ct > 220 && ct < 241) {
                                                                      yi = 175;
                                                                      yf = 165;
                                                                    } else 
                                                                        if (ct > 240 && ct < 261) {
                                                                          yi = 190;
                                                                          yf = 180;
                                                                        } else 
                                                                            if (ct > 260 && ct < 281) {
                                                                              yi = 205;
                                                                              yf = 195;
                                                                            } else 
                                                                                if (ct > 280 && ct < 301) {
                                                                                  yi = 220;
                                                                                  yf = 210;
                                                                                } else 
                                                                                    if (ct > 300 && ct < 321) {
                                                                                      yi = 235;
                                                                                      yf = 225;
                                                                                    } else 
                                                                                        if (ct > 320 && ct < 341) {
                                                                                          yi = 250;
                                                                                          yf = 240;
                                                                                        } else 
                                                                                            if (ct > 340 && ct < 361) {
                                                                                              yi = 265;
                                                                                              yf = 255;
                                                                                            } else 
                                                                                                if (ct > 360 && ct < 381) {
                                                                                                  yi = 280;
                                                                                                  yf = 270;
                                                                                                } else 
                                                                                                    if (ct > 380 && ct <= 400) {
                                                                                                      yi = 295;
                                                                                                      yf = 285;
                                                                                                    }
                if (cl == 0) {
                    dibujoCanvasTriangulito(colorTrazo, xi, yi, xf, yf);
                } else 
                    if (cl == 1) {
                      if (ct < 21) {
                        yi = yf;
                        yf = 10;
                      } else 
                          if (ct > 20 && ct < 41) {
                            yi = yf;
                            yf = 25;
                          } else 
                              if (ct > 40 && ct < 61) {
                                yi= yf;
                                yf = 40;
                              } else 
                                  if (ct > 60 && ct < 81) {
                                    yi= yf;
                                    yf = 55;
                                  } else 
                                      if (ct > 80 && ct < 101) {
                                        yi = yf;
                                        yf = 70;
                                      } else 
                                          if (ct > 100 && ct < 121) {
                                            yi = yf;
                                            yf = 85;
                                          } else
                                              if (ct > 120 && ct < 141) {
                                                yi = yf;
                                                yf = 100;
                                              } else
                                                  if (ct > 140 && ct < 161) {
                                                    yi = yf;
                                                    yf = 115;
                                                  } else
                                                      if (ct > 160 && ct < 181) {
                                                        yi = yf;
                                                        yf = 130;
                                                      } else
                                                          if (ct > 180 && ct < 201) {
                                                            yi = yf;
                                                            yf = 145;
                                                          } else 
                                                              if (ct > 200 && ct < 221) {
                                                                yi = yf;
                                                                yf = 160;
                                                              } else 
                                                                  if (ct > 220 && ct < 241) {
                                                                    yi = yf;
                                                                    yf = 175;
                                                                  } else 
                                                                      if (ct > 240 && ct < 261) {
                                                                        yi = yf;
                                                                        yf = 190;
                                                                      } else 
                                                                          if (ct > 260 && ct < 281) {
                                                                            yi = yf;
                                                                            yf = 205;
                                                                          } else 
                                                                              if (ct > 280 && ct < 301) {
                                                                                yi = yf;
                                                                                yf = 220;
                                                                              } else 
                                                                                  if (ct > 300 && ct < 321) {
                                                                                    yi = yf;
                                                                                    yf = 235;
                                                                                  } else 
                                                                                      if (ct > 320 && ct < 341) {
                                                                                        yi = yf;
                                                                                        yf = 250;
                                                                                      } else 
                                                                                          if (ct > 340 && ct < 361) {
                                                                                            yi = yf;
                                                                                            yf = 265;
                                                                                          } else 
                                                                                              if (ct > 360 && ct < 381) {
                                                                                                yi = yf;
                                                                                                yf = 280;
                                                                                              } else 
                                                                                                  if (ct > 380 && ct <= 400) {
                                                                                                    yi = yf;
                                                                                                    yf = 295;
                                                                                                  }
                      dibujoCanvasTriangulito(colorTrazo, xi, yi, xf, yf);
                    } else {  
                        if (ct < 21) {
                          yf = 10;
                        } else 
                            if (ct > 20 && ct < 41) {
                              yi = 25;
                              yf = yi;
                            } else 
                                if (ct > 40 && ct < 61) {
                                  yi= 40;
                                  yf  = yi;
                                } else 
                                    if (ct > 60 && ct < 81) {
                                    yi = 55;
                                    yf = yi;
                                } else 
                                    if (ct > 80 && ct < 101) {
                                      yi = 70;
                                      yf = yi;
                                    } else 
                                        if (ct > 100 && ct < 121) {
                                          yi = 85;
                                          yf = yi;
                                        } else
                                            if (ct > 120 && ct < 141) {
                                              yi = 100;
                                              yf = yi;
                                            } else
                                                if (ct > 140 && ct < 161) {
                                                  yi = 115;
                                                  yf = yi;
                                                } else
                                                    if (ct > 160 && ct < 181) {
                                                      yi = 130;
                                                      yf = yi;
                                                    } else 
                                                        if (ct > 180 && ct < 201) {
                                                          yi = 145;
                                                          yf = yi;
                                                        } else 
                                                            if (ct > 200 && ct < 221) {
                                                              yi = 160;
                                                              yf = yi;
                                                            } else 
                                                                if (ct > 220 && ct < 241) {
                                                                  yi = 175;
                                                                  yf = yi;
                                                                } else 
                                                                    if (ct > 240 && ct < 261) {
                                                                      yi = 190;
                                                                      yf = yi;
                                                                    } else 
                                                                        if (ct > 260 && ct < 281) {
                                                                          yi = 205;
                                                                          yf = yi;
                                                                        } else 
                                                                            if (ct > 280 && ct < 301) {
                                                                              yi = 220;
                                                                              yf = yi;
                                                                            } else 
                                                                                if (ct > 300 && ct < 321) {
                                                                                  yi = 235;
                                                                                  yf = yi;
                                                                                } else 
                                                                                    if (ct > 320 && ct < 341) {
                                                                                      yi = 250;
                                                                                      yf = yi;
                                                                                    } else 
                                                                                        if (ct > 340 && ct < 361) {
                                                                                          yi = 265;
                                                                                          yf = yi;
                                                                                        } else 
                                                                                            if (ct > 360 && ct < 381) {
                                                                                              yi = 280;
                                                                                              yf = yi;
                                                                                            } else 
                                                                                                if (ct > 380 && ct <= 400) {
                                                                                                  yi = 295;
                                                                                                  yf = yi;
                                                                                                }
                        xf = xf - 15;
                        dibujoCanvasTriangulito(colorTrazo, xi, yi, xf,yf);
                      }
              }
            }
          }
          
          function dibujoCanvasTriangulito(colorLinea, xinicial, yinicial, xfinal, yfinal) {
            papel.beginPath();
            papel.strokeStyle = colorLinea;
            papel.moveTo(xinicial, yinicial);
            papel.lineTo(xfinal, yfinal);
            papel.stroke();
            papel.closePath();
          }
        } else 
        if (opcion == 3) {
          Circunferencia();
          function Circunferencia() {
            var x, y, radio, anguloPartida,anguloFinal, contadorCirculos;
            var indicadorDeCirculos;
            x = 6;
            y = 6;
            radio = 5;
            anguloPartida = 0;
            anguloFinal = 2 * Math.PI;
            indicadorDeCirculos = false;
            for (contadorCirculos = 1; contadorCirculos <= cantidad_figuras*2; contadorCirculos++) {
                  if (x > 299) {
                    x = 6;
                    y = y + 15; 
                  }
                  if (indicadorDeCirculos == true) {
                    x = x + 15;
                    indicadorDeCirculos = false;
                  } else {
                      dibujoCanvasCirculo(colorTrazo, x, y, radio, anguloPartida, anguloFinal);
                      indicadorDeCirculos = true;
                    }
                }
                function dibujoCanvasCirculo (colorLinea, x, y, radio, anguloPartida, anguloFinal) {
                  papel.beginPath();
                  papel.strokeStyle = colorLinea;
                  papel.arc(x ,y , radio, anguloPartida, anguloFinal);
                  papel.stroke(); 
                  papel.closePath();
                }
          }
        } else {
            alert("Hay un error. Verififique los datos.");
          }
  } else {
    alert("Hay un error. Verififique los datos.");
    }
}
