    jQuery(document).ready(function ($) {

        var jssor_1_SlideoTransitions = [
            [{b: 900, d: 2000, x: -379, e: {x: 7}}],
            [{b: 900, d: 2000, x: -379, e: {x: 7}}],
            [{b: -1, d: 1, o: -1, sX: 2, sY: 2}, {
                b: 0,
                d: 900,
                x: -171,
                y: -341,
                o: 1,
                sX: -2,
                sY: -2,
                e: {x: 3, y: 3, sX: 3, sY: 3}
            }, {b: 900, d: 1600, x: -283, o: -1, e: {x: 16}}]
        ];

        //banner options
        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        //video slide options
        var jssor_2_options = {
            $AutoPlay: 1,
            $SlideWidth: 840,
            $Cols: 2,
            $Align: 400,
            // $SlideSpacing: 20,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        //drawing options
        var jssor_3_options = {
            $AutoPlay: 1,
            $FillMode: 1,
            $SlideWidth: 500,
            $Cols: 2,
            $SlideSpacing: 20,
            // $Align: 10,
            // $SlideDuration: 800,
            // $SlideEasing: $Jease$.$OutQuint,
            // $CaptionSliderOptions: {
            //     $Class: $JssorCaptionSlideo$,
            //     $Transitions: jssor_1_SlideoTransitions
            // },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_main_banner = new $JssorSlider$("main_banner", jssor_1_options);
        var animation_slider = new $JssorSlider$("animation_slider", jssor_2_options);
        var modelWork_slider = new $JssorSlider$("modelWork_slider", jssor_2_options);
        var drawingWork_slider = new $JssorSlider$("drawingWork_slider", jssor_3_options);


        /*responsive code begin*/
        /*remove responsive code if you don't want the slider scales while window resizing*/
        function ScaleSlider() {
            var refSize = jssor_main_banner.$Elmt.parentNode.clientWidth;
            var refSize = animation_slider.$Elmt.parentNode.clientWidth;
            var refSize = modelWork_slider.$Elmt.parentNode.clientWidth;
            var refSize = drawingWork_slider.$Elmt.parentNode.clientWidth;

            if (refSize) {
                refSize = Math.min(refSize, 1920);
                jssor_main_banner.$ScaleWidth(refSize);
                animation_slider.$ScaleWidth(refSize);
                modelWork_slider.$ScaleWidth(refSize);
                drawingWork_slider.$ScaleWidth(refSize);

            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        /*responsive code end*/
    });