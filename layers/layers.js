var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Sudamrica_1 = new ol.format.GeoJSON();
var features_Sudamrica_1 = format_Sudamrica_1.readFeatures(json_Sudamrica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sudamrica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sudamrica_1.addFeatures(features_Sudamrica_1);
var lyr_Sudamrica_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sudamrica_1, 
                style: style_Sudamrica_1,
                interactive: true,
                title: '<img src="styles/legend/Sudamrica_1.png" /> Sudamérica'
            });
var format_HIDROGRAFIA_2 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_2 = format_HIDROGRAFIA_2.readFeatures(json_HIDROGRAFIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_2.addFeatures(features_HIDROGRAFIA_2);
var lyr_HIDROGRAFIA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_2, 
                style: style_HIDROGRAFIA_2,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_2.png" /> HIDROGRAFIA'
            });
var format_CIUDADESIMPORTANTES_3 = new ol.format.GeoJSON();
var features_CIUDADESIMPORTANTES_3 = format_CIUDADESIMPORTANTES_3.readFeatures(json_CIUDADESIMPORTANTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIUDADESIMPORTANTES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIUDADESIMPORTANTES_3.addFeatures(features_CIUDADESIMPORTANTES_3);
var lyr_CIUDADESIMPORTANTES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIUDADESIMPORTANTES_3, 
                style: style_CIUDADESIMPORTANTES_3,
                interactive: true,
                title: '<img src="styles/legend/CIUDADESIMPORTANTES_3.png" /> CIUDADES IMPORTANTES'
            });
var format_VIRREINATO_4 = new ol.format.GeoJSON();
var features_VIRREINATO_4 = format_VIRREINATO_4.readFeatures(json_VIRREINATO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIRREINATO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIRREINATO_4.addFeatures(features_VIRREINATO_4);
var lyr_VIRREINATO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIRREINATO_4, 
                style: style_VIRREINATO_4,
                interactive: true,
                title: '<img src="styles/legend/VIRREINATO_4.png" /> VIRREINATO'
            });
var format_MARCADORDELVIRREINATO_5 = new ol.format.GeoJSON();
var features_MARCADORDELVIRREINATO_5 = format_MARCADORDELVIRREINATO_5.readFeatures(json_MARCADORDELVIRREINATO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCADORDELVIRREINATO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCADORDELVIRREINATO_5.addFeatures(features_MARCADORDELVIRREINATO_5);
var lyr_MARCADORDELVIRREINATO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARCADORDELVIRREINATO_5, 
                style: style_MARCADORDELVIRREINATO_5,
                interactive: true,
                title: '<img src="styles/legend/MARCADORDELVIRREINATO_5.png" /> MARCADOR DEL VIRREINATO'
            });
var format_COMANDANCIADEMAINAS_6 = new ol.format.GeoJSON();
var features_COMANDANCIADEMAINAS_6 = format_COMANDANCIADEMAINAS_6.readFeatures(json_COMANDANCIADEMAINAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMANDANCIADEMAINAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMANDANCIADEMAINAS_6.addFeatures(features_COMANDANCIADEMAINAS_6);
var lyr_COMANDANCIADEMAINAS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMANDANCIADEMAINAS_6, 
                style: style_COMANDANCIADEMAINAS_6,
                interactive: true,
                title: '<img src="styles/legend/COMANDANCIADEMAINAS_6.png" /> COMANDANCIA DE MAINAS'
            });
var format_PUNO_7 = new ol.format.GeoJSON();
var features_PUNO_7 = format_PUNO_7.readFeatures(json_PUNO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNO_7.addFeatures(features_PUNO_7);
var lyr_PUNO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUNO_7, 
                style: style_PUNO_7,
                interactive: true,
                title: '<img src="styles/legend/PUNO_7.png" /> PUNO'
            });
var format_AREQUIPA_8 = new ol.format.GeoJSON();
var features_AREQUIPA_8 = format_AREQUIPA_8.readFeatures(json_AREQUIPA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREQUIPA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREQUIPA_8.addFeatures(features_AREQUIPA_8);
var lyr_AREQUIPA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREQUIPA_8, 
                style: style_AREQUIPA_8,
                interactive: true,
                title: '<img src="styles/legend/AREQUIPA_8.png" /> AREQUIPA'
            });
var format_CUSCO_9 = new ol.format.GeoJSON();
var features_CUSCO_9 = format_CUSCO_9.readFeatures(json_CUSCO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUSCO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUSCO_9.addFeatures(features_CUSCO_9);
var lyr_CUSCO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUSCO_9, 
                style: style_CUSCO_9,
                interactive: true,
                title: '<img src="styles/legend/CUSCO_9.png" /> CUSCO'
            });
var format_HUANCAVELICA_10 = new ol.format.GeoJSON();
var features_HUANCAVELICA_10 = format_HUANCAVELICA_10.readFeatures(json_HUANCAVELICA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUANCAVELICA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUANCAVELICA_10.addFeatures(features_HUANCAVELICA_10);
var lyr_HUANCAVELICA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HUANCAVELICA_10, 
                style: style_HUANCAVELICA_10,
                interactive: true,
                title: '<img src="styles/legend/HUANCAVELICA_10.png" /> HUANCAVELICA'
            });
var format_HUAMANGA_11 = new ol.format.GeoJSON();
var features_HUAMANGA_11 = format_HUAMANGA_11.readFeatures(json_HUAMANGA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HUAMANGA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUAMANGA_11.addFeatures(features_HUAMANGA_11);
var lyr_HUAMANGA_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HUAMANGA_11, 
                style: style_HUAMANGA_11,
                interactive: true,
                title: '<img src="styles/legend/HUAMANGA_11.png" /> HUAMANGA'
            });
var format_TARMA_12 = new ol.format.GeoJSON();
var features_TARMA_12 = format_TARMA_12.readFeatures(json_TARMA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TARMA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TARMA_12.addFeatures(features_TARMA_12);
var lyr_TARMA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TARMA_12, 
                style: style_TARMA_12,
                interactive: true,
                title: '<img src="styles/legend/TARMA_12.png" /> TARMA'
            });
var format_TRUJILLO_13 = new ol.format.GeoJSON();
var features_TRUJILLO_13 = format_TRUJILLO_13.readFeatures(json_TRUJILLO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRUJILLO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRUJILLO_13.addFeatures(features_TRUJILLO_13);
var lyr_TRUJILLO_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRUJILLO_13, 
                style: style_TRUJILLO_13,
                interactive: true,
                title: '<img src="styles/legend/TRUJILLO_13.png" /> TRUJILLO'
            });
var format_LIMA_14 = new ol.format.GeoJSON();
var features_LIMA_14 = format_LIMA_14.readFeatures(json_LIMA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMA_14.addFeatures(features_LIMA_14);
var lyr_LIMA_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMA_14, 
                style: style_LIMA_14,
                interactive: true,
                title: '<img src="styles/legend/LIMA_14.png" /> LIMA'
            });
var group_LIMA = new ol.layer.Group({
                                layers: [lyr_LIMA_14,],
                                title: "LIMA"});
var group_TRUJILLO = new ol.layer.Group({
                                layers: [lyr_TRUJILLO_13,],
                                title: "TRUJILLO"});
var group_TARMA = new ol.layer.Group({
                                layers: [lyr_TARMA_12,],
                                title: "TARMA"});
var group_HUAMANGA = new ol.layer.Group({
                                layers: [lyr_HUAMANGA_11,],
                                title: "HUAMANGA"});
var group_HUANCAVELICA = new ol.layer.Group({
                                layers: [lyr_HUANCAVELICA_10,],
                                title: "HUANCAVELICA"});
var group_CUSCO = new ol.layer.Group({
                                layers: [lyr_CUSCO_9,],
                                title: "CUSCO"});
var group_AREQUIPA = new ol.layer.Group({
                                layers: [lyr_AREQUIPA_8,],
                                title: "AREQUIPA"});
var group_PUNO = new ol.layer.Group({
                                layers: [lyr_PUNO_7,],
                                title: "PUNO"});
var group_VIRREINATO = new ol.layer.Group({
                                layers: [lyr_VIRREINATO_4,lyr_MARCADORDELVIRREINATO_5,lyr_COMANDANCIADEMAINAS_6,],
                                title: "VIRREINATO"});
var group_MAPASUDAMERICA = new ol.layer.Group({
                                layers: [lyr_Sudamrica_1,lyr_HIDROGRAFIA_2,lyr_CIUDADESIMPORTANTES_3,],
                                title: "MAPA SUDAMERICA"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,],
                                title: "MAPA BASE"});

lyr_ESRISatellite_0.setVisible(true);lyr_Sudamrica_1.setVisible(false);lyr_HIDROGRAFIA_2.setVisible(false);lyr_CIUDADESIMPORTANTES_3.setVisible(false);lyr_VIRREINATO_4.setVisible(false);lyr_MARCADORDELVIRREINATO_5.setVisible(false);lyr_COMANDANCIADEMAINAS_6.setVisible(false);lyr_PUNO_7.setVisible(false);lyr_AREQUIPA_8.setVisible(false);lyr_CUSCO_9.setVisible(false);lyr_HUANCAVELICA_10.setVisible(false);lyr_HUAMANGA_11.setVisible(false);lyr_TARMA_12.setVisible(false);lyr_TRUJILLO_13.setVisible(false);lyr_LIMA_14.setVisible(false);
var layersList = [group_MAPABASE,group_MAPASUDAMERICA,group_VIRREINATO,group_PUNO,group_AREQUIPA,group_CUSCO,group_HUANCAVELICA,group_HUAMANGA,group_TARMA,group_TRUJILLO,group_LIMA];
lyr_Sudamrica_1.set('fieldAliases', {'PAÍS': 'PAÍS', });
lyr_HIDROGRAFIA_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_CIUDADESIMPORTANTES_3.set('fieldAliases', {'CIUDAD': 'CIUDAD', 'PAIS': 'PAIS', 'CAPITAL': 'CAPITAL', });
lyr_VIRREINATO_4.set('fieldAliases', {'VIRREINATO': 'VIRREINATO', });
lyr_MARCADORDELVIRREINATO_5.set('fieldAliases', {'MARCA': 'MARCA', });
lyr_COMANDANCIADEMAINAS_6.set('fieldAliases', {'COMA': 'COMA', });
lyr_PUNO_7.set('fieldAliases', {'PUNO': 'PUNO', });
lyr_AREQUIPA_8.set('fieldAliases', {'AREQ': 'AREQ', });
lyr_CUSCO_9.set('fieldAliases', {'CUSC': 'CUSC', });
lyr_HUANCAVELICA_10.set('fieldAliases', {'HUANC': 'HUANC', });
lyr_HUAMANGA_11.set('fieldAliases', {'HUAM': 'HUAM', });
lyr_TARMA_12.set('fieldAliases', {'TAR': 'TAR', });
lyr_TRUJILLO_13.set('fieldAliases', {'TRUJ': 'TRUJ', });
lyr_LIMA_14.set('fieldAliases', {'LIM': 'LIM', });
lyr_Sudamrica_1.set('fieldImages', {'PAÍS': 'TextEdit', });
lyr_HIDROGRAFIA_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_CIUDADESIMPORTANTES_3.set('fieldImages', {'CIUDAD': 'TextEdit', 'PAIS': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_VIRREINATO_4.set('fieldImages', {'VIRREINATO': '', });
lyr_MARCADORDELVIRREINATO_5.set('fieldImages', {'MARCA': 'TextEdit', });
lyr_COMANDANCIADEMAINAS_6.set('fieldImages', {'COMA': 'TextEdit', });
lyr_PUNO_7.set('fieldImages', {'PUNO': 'TextEdit', });
lyr_AREQUIPA_8.set('fieldImages', {'AREQ': 'TextEdit', });
lyr_CUSCO_9.set('fieldImages', {'CUSC': 'TextEdit', });
lyr_HUANCAVELICA_10.set('fieldImages', {'HUANC': 'TextEdit', });
lyr_HUAMANGA_11.set('fieldImages', {'HUAM': 'TextEdit', });
lyr_TARMA_12.set('fieldImages', {'TAR': 'TextEdit', });
lyr_TRUJILLO_13.set('fieldImages', {'TRUJ': 'TextEdit', });
lyr_LIMA_14.set('fieldImages', {'LIM': 'TextEdit', });
lyr_Sudamrica_1.set('fieldLabels', {});
lyr_HIDROGRAFIA_2.set('fieldLabels', {});
lyr_CIUDADESIMPORTANTES_3.set('fieldLabels', {});
lyr_VIRREINATO_4.set('fieldLabels', {});
lyr_MARCADORDELVIRREINATO_5.set('fieldLabels', {});
lyr_COMANDANCIADEMAINAS_6.set('fieldLabels', {});
lyr_PUNO_7.set('fieldLabels', {});
lyr_AREQUIPA_8.set('fieldLabels', {});
lyr_CUSCO_9.set('fieldLabels', {});
lyr_HUANCAVELICA_10.set('fieldLabels', {});
lyr_HUAMANGA_11.set('fieldLabels', {});
lyr_TARMA_12.set('fieldLabels', {});
lyr_TRUJILLO_13.set('fieldLabels', {});
lyr_LIMA_14.set('fieldLabels', {});
lyr_LIMA_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});