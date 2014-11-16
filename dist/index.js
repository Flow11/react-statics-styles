"use strict";

require("6to5/polyfill");
var Promise = require("bluebird");
var _ = require("lodash-next");
var recase = require("change-case");

function extractStyle(selector, reactStyle) {
  var rules = Object.keys(reactStyle).map(function (attr) {
    return "  " + recase.paramCase(attr) + ": " + reactStyle[attr] + ";";
  }).join("\n");
  return "" + selector + ": {\n    " + rules + "\n  }\n  ";
}

function extractStyles(Component) {
  if (!_.isObject(Component) || !Component.styles || !_.isObject(Component.styles)) {
    return null;
  }
  return "/* From " + Component.displayName + ".styles: */\n  " + Object.keys(Component.styles).map(function (selector) {
    return extractStyle(selector, Component.styles[selector]);
  }).join("\n");
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join("\n");
}


module.exports = { extractStyle: extractStyle, extractStyles: extractStyles, extractAllStyles: extractAllStyles };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImc6L3JlYWN0LW5leHVzL3JlYWN0LW5leHVzLXN0eWxlL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEMsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFdEMsU0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUMxQyxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7a0JBQVUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBSyxVQUFVLENBQUMsSUFBSSxDQUFDO0dBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsSCxjQUFVLFFBQVEsaUJBQ2QsS0FBSyxlQUdQOzs7O0FBSUYsTUFBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQ3JCLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFDakIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNqQyxXQUFPLElBQUksQ0FBQztHQUNiO0FBQ0QsU0FBTyxhQUFXLFNBQVMsQ0FBQyxXQUFXLHVCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsR0FBRyxDQUFDLFVBQUMsUUFBUTtXQUFLLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7QUFDcEMsU0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNyRTs7O0FBR0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLFlBQVksRUFBWixZQUFZLEVBQUUsYUFBYSxFQUFiLGFBQWEsRUFBRSxnQkFBZ0IsRUFBaEIsZ0JBQWdCLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJzZ0bzUvcG9seWZpbGwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gtbmV4dCcpO1xuY29uc3QgcmVjYXNlID0gcmVxdWlyZSgnY2hhbmdlLWNhc2UnKTtcblxuZnVuY3Rpb24gZXh0cmFjdFN0eWxlKHNlbGVjdG9yLCByZWFjdFN0eWxlKSB7XG4gIGxldCBydWxlcyA9IE9iamVjdC5rZXlzKHJlYWN0U3R5bGUpLm1hcCgoYXR0cikgPT4gYCAgJHtyZWNhc2UucGFyYW1DYXNlKGF0dHIpfTogJHtyZWFjdFN0eWxlW2F0dHJdfTtgKS5qb2luKCdcXG4nKTtcbiAgcmV0dXJuIGAke3NlbGVjdG9yfToge1xuICAgICR7cnVsZXN9XG4gIH1cbiAgYDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFN0eWxlcyhDb21wb25lbnQpIHtcbiAgaWYoIV8uaXNPYmplY3QoQ29tcG9uZW50KSB8fFxuICAgICAgIUNvbXBvbmVudC5zdHlsZXMgfHxcbiAgICAgICFfLmlzT2JqZWN0KENvbXBvbmVudC5zdHlsZXMpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGAvKiBGcm9tICR7Q29tcG9uZW50LmRpc3BsYXlOYW1lfS5zdHlsZXM6ICovXG4gIGAgKyBPYmplY3Qua2V5cyhDb21wb25lbnQuc3R5bGVzKVxuICAubWFwKChzZWxlY3RvcikgPT4gZXh0cmFjdFN0eWxlKHNlbGVjdG9yLCBDb21wb25lbnQuc3R5bGVzW3NlbGVjdG9yXSkpXG4gIC5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFsbFN0eWxlcyhDb21wb25lbnRzKSB7XG4gIHJldHVybiBfLndpdGhvdXQoXy5tYXAoQ29tcG9uZW50cywgZXh0cmFjdFN0eWxlcyksIG51bGwpLmpvaW4oJ1xcbicpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0geyBleHRyYWN0U3R5bGUsIGV4dHJhY3RTdHlsZXMsIGV4dHJhY3RBbGxTdHlsZXMgfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==