var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  layout: {
    name: 'dagre'
  },

  style: [
	
    {
      selector: 'node',
      style: {
        'content': 'data(id)',
        'text-opacity': 0.5,
        'text-valign': 'center',
        'text-halign': 'right',
        'background-color': '#504B4B',
		'color': '#ffffff',
		'pie-size': '80%',
        'pie-1-background-color': '#868585',
        'pie-1-background-size': 'mapData(untested, 0, 10, 0, 100)',
        'pie-2-background-color': '#11C560',
        'pie-2-background-size': 'mapData(success, 0, 10, 0, 100)',
        'pie-3-background-color': '#ED4B35',
        'pie-3-background-size': 'mapData(failure, 0, 10, 0, 100)'
      }
    },
	{
      selector: '#WGH',
      style: {
        'background-color': 'orange',
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'unbundled-bezier',
        'width': 4,
        'target-arrow-shape': 'triangle',
        'line-color': '#504B4B',
        'target-arrow-color': '#504B4B'
      }
    }
  ],

  elements: {
    nodes: [
	  { data: { id: 'APPR', untested:0, success:10, failure:0 } },
      { data: { id: 'WGH', untested:10, success:0, failure:0  } },
	  { data: { id: 'GV', untested:0, success:5, failure:5  } },
	  { data: { id: 'DES', untested:0, success:0, failure:10  } },
      { data: { id: 'GW', untested:10, success:0, failure:0 } },
	  { data: { id: 'OAUTH', untested:10, success:0, failure:0 } },
	  { data: { id: 'AW', untested:10, success:0, failure:0 } },
	  { data: { id: 'APSI', untested:10, success:0, failure:0 } },
	  { data: { id: 'APSM', untested:10, success:0, failure:0 } },
	  { data: { id: 'FRSI', untested:10, success:0, failure:0 } },
	  { data: { id: 'FRSM', untested:10, success:0, failure:0 } },
	  { data: { id: 'DRSI', untested:10, success:0, failure:0  } },
	  { data: { id: 'OPSI', untested:10, success:0, failure:0 } },
	  { data: { id: 'OPSM', untested:10, success:0, failure:0 } },
      { data: { id: 'DCSI', untested:10, success:0, failure:0  } },
      { data: { id: 'DCSM', untested:10, success:0, failure:0  } },
      { data: { id: 'DOSI', untested:10, success:0, failure:0  } },
      { data: { id: 'DOSM', untested:10, success:0, failure:0  } },
      { data: { id: 'SIC', untested:10, success:0, failure:0  } }
    ],
    edges: [
      { data: { source: 'APPR', target: 'GW' } },
      { data: { source: 'GW', target: 'GV' } },
	  { data: { source: 'GW', target: 'OAUTH' } },
	  { data: { source: 'OAUTH', target: 'AW' } },
      { data: { source: 'GV', target: 'DES' } },
      { data: { source: 'APPR', target: 'DES' } },
	  { data: { source: 'WGH', target: 'GW' } },
      { data: { source: 'GW', target: 'APSI' } },
      { data: { source: 'APSI', target: 'OPSI' } },
	  { data: { source: 'OPSI', target: 'OPSM' } },
	  { data: { source: 'OPSM', target: 'SIC' } },
	  { data: { source: 'APSI', target: 'APSM' } },
	  { data: { source: 'APSM', target: 'SIC' } },
	  { data: { source: 'APSI', target: 'FRSI' } },
	  { data: { source: 'FRSI', target: 'FRSM' } },
	  { data: { source: 'FRSM', target: 'SIC' } },
      { data: { source: 'GW', target: 'DCSI'} },
	  { data: { source: 'DCSI', target: 'DCSM'} },
	  { data: { source: 'DCSM', target: 'SIC'} },
	  { data: { source: 'DCSI', target: 'DRSI'} },
	  { data: { source: 'GW', target: 'DOSI'} },
	  { data: { source: 'DOSM', target: 'DRSI'} },
	  { data: { source: 'DOSM', target: 'SIC'} },
	  { data: { source: 'DOSI', target: 'DOSM'} }
	  
    ]
  },
});

cy.on('click', 'node', function(evt){
      console.log( 'clicked ' + this.id() );
});
