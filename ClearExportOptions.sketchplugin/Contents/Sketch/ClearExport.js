@import 'common.js'

var onRun = function(context) {

  var doc = context.document;
  doc.currentPage().deselectAllLayers();
  var pages = [doc pages];
  //var artboards = [[doc currentPage] artboards];
  var pagesCount = pages.count();
  var artboardsCount = 0;
  var exportablesCount = 0;

  //loop through the pages
  for (var i = 0; i < pages.count(); i++){
    //reference each page
    var page = pages[i];
    var exportables = page.exportableLayers();
    exportablesCount =  exportablesCount + exportables.length;
    for (var j = 0; j < exportables.length; j++) {
      var exportable = exportables.objectAtIndex(j);
      if (exportable instanceof MSArtboardGroup) {
        //log("ARTBOARDS: " + exportable.name());
      } else {
        exportable.exportOptions().removeAllExportFormats();
        //log("ELEMENTS: " + exportable.name());
      }

    }

  }
  //log(exportablesCount);
 [doc showMessage: "Sweet! Elements in all " + pagesCount + " pages are not exportable anymore. ✌️ (Changed mind? Use ⌘Z)"];
}
