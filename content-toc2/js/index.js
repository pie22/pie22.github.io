var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Demo for this article:
    http://blustemy.io/creating-a-table-of-contents-in-javascript/
*/

var TableOfContents = function () {
    /*
        The parameters from and to must be Element objects in the DOM.
    */
    function TableOfContents(_ref) {
        var from = _ref.from,
            to = _ref.to;

        _classCallCheck(this, TableOfContents);

        this.fromElement = from;
        this.toElement = to;
        // Get all the ordered headings.
        this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
        this.tocElement = document.createElement("div");
    }

    /*
        Get the most important heading level.
        For example if the article has only <h2>, <h3> and <h4> tags
        this method will return 2.
    */


    _createClass(TableOfContents, [{
        key: "getMostImportantHeadingLevel",
        value: function getMostImportantHeadingLevel() {
            var mostImportantHeadingLevel = 6; // <h6> heading level
            for (var i = 0; i < this.headingElements.length; i++) {
                var headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
                mostImportantHeadingLevel = headingLevel < mostImportantHeadingLevel ? headingLevel : mostImportantHeadingLevel;
            }
            return mostImportantHeadingLevel;
        }

        /*
            Generate a unique id string for the heading from its text content.
        */

    }, {
        key: "generateToc",
        value: function generateToc() {
            var currentLevel = this.getMostImportantHeadingLevel() - 1,
                currentElement = this.tocElement;

            for (var i = 0; i < this.headingElements.length; i++) {
                var headingElement = this.headingElements[i],
                    headingLevel = TableOfContents.getHeadingLevel(headingElement),
                    headingLevelDifference = headingLevel - currentLevel,
                    linkElement = document.createElement("a");

                if (!headingElement.id) {
                    headingElement.id = TableOfContents.generateId(headingElement);
                }
                linkElement.href = "#" + headingElement.id;
                linkElement.textContent = headingElement.textContent;

                if (headingLevelDifference > 0) {
                    // Go down the DOM by adding list elements.
                    for (var j = 0; j < headingLevelDifference; j++) {
                        var listElement = document.createElement("ol"),
                            listItemElement = document.createElement("li");
                        listElement.appendChild(listItemElement);
                        currentElement.appendChild(listElement);
                        currentElement = listItemElement;
                    }
                    currentElement.appendChild(linkElement);
                } else {
                    // Go up the DOM.
                    for (var _j = 0; _j < -headingLevelDifference; _j++) {
                        currentElement = currentElement.parentNode.parentNode;
                    }
                    var _listItemElement = document.createElement("li");
                    _listItemElement.appendChild(linkElement);
                    currentElement.parentNode.appendChild(_listItemElement);
                    currentElement = _listItemElement;
                }

                currentLevel = headingLevel;
            }

            this.toElement.appendChild(this.tocElement.firstChild);
        }
    }], [{
        key: "generateId",
        value: function generateId(headingElement) {
            return headingElement.textContent.replace(/\s+/g, "_");
        }

        /*
            Convert <h1> to 1 … <h6> to 6.
        */

    }, {
        key: "getHeadingLevel",
        value: function getHeadingLevel(headingElement) {
            switch (headingElement.tagName.toLowerCase()) {
                case "h1":
                    return 1;
                case "h2":
                    return 2;
                case "h3":
                    return 3;
                case "h4":
                    return 4;
                case "h5":
                    return 5;
                case "h6":
                    return 6;
                default:
                    return 1;
            }
        }
    }]);

    return TableOfContents;
}();

document.addEventListener("DOMContentLoaded", function () {
    return new TableOfContents({
        from: document.querySelector(".article"),
        to: document.querySelector(".table-of-contents")
    }).generateToc();
});