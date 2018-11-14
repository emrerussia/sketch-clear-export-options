@import 'common.js'

var onRun = function(context) {

  var doc = context.document;
  var page = doc.currentPage();
  page.changeSelectionBySelectingLayers(nil);
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
    var exportablesLength = exportables.length;
    for (var j = 0; j < exportablesLength; j++) {
      var exportable = exportables.objectAtIndex(j);
      if (exportable instanceof MSArtboardGroup) {
        //log("ARTBOARDS: " + exportable.name());
      } else {
        exportable.exportOptions().removeAllExportFormats();
        exportablesCount =  exportablesLength;
        //log("ELEMENTS: " + exportable.name());
      }
    }
  }
 doc.refreshLayerListIfNecessary(nil);
 [doc showMessage: "Sweet! " + exportablesCount + " elements in all " + pagesCount + " pages are not exportable anymore. ✌️ (Changed mind? Use ⌘Z)"];
}
