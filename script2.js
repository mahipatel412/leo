const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

function formatStations(stations) {
  const stationList = document.getElementById('stationList');

  stations.forEach(station => {
    const semicolonIndex = station.indexOf(';');
    const stationCode = station.substring(0, semicolonIndex);
    const stationName = station.substring(semicolonIndex + 1);

    const stationItem = document.createElement('div');
    stationItem.className = 'stationItem';

    const codeElement = document.createElement('span');
    codeElement.className = 'stationCode';
    codeElement.textContent = stationCode;

    const nameElement = document.createElement('span');
    nameElement.className = 'stationName';
    nameElement.textContent = stationName;

    stationItem.appendChild(codeElement);
    stationItem.appendChild(nameElement);

    stationList.appendChild(stationItem);
  });
}

formatStations(stations);
