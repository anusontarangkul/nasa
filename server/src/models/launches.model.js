const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: "Kepler Expolration X",
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-422 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLanches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLanches,
}