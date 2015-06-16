/**
 * Created by renerodriguez on 6/15/15.
 */
angular.module("angular-video", []).directive("vgSrc",
    function () {
        return {
            restrict: "A",
            link: {
                pre: function (scope, elem, attr) {
                    var element = elem;
                    element.attr("src", attr.vgSrc);
                    element.attr("type", "video/mp4");
                }
            }
        }
    }
);