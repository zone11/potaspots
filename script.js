// Complete continent mapping based on ISO 3166-1 alpha-2 country codes
const CONTINENT_MAP = {
    // Europe
    'AD': 'Europe', // Andorra
    'AL': 'Europe', // Albania
    'AT': 'Europe', // Austria
    'AX': 'Europe', // Åland Islands
    'BA': 'Europe', // Bosnia and Herzegovina
    'BE': 'Europe', // Belgium
    'BG': 'Europe', // Bulgaria
    'BY': 'Europe', // Belarus
    'CH': 'Europe', // Switzerland
    'CY': 'Europe', // Cyprus
    'CZ': 'Europe', // Czech Republic
    'DE': 'Europe', // Germany
    'DK': 'Europe', // Denmark
    'EE': 'Europe', // Estonia
    'ES': 'Europe', // Spain
    'FI': 'Europe', // Finland
    'FO': 'Europe', // Faroe Islands
    'FR': 'Europe', // France
    'GB': 'Europe', // United Kingdom
    'GG': 'Europe', // Guernsey
    'GI': 'Europe', // Gibraltar
    'GR': 'Europe', // Greece
    'HR': 'Europe', // Croatia
    'HU': 'Europe', // Hungary
    'IE': 'Europe', // Ireland
    'IM': 'Europe', // Isle of Man
    'IS': 'Europe', // Iceland
    'IT': 'Europe', // Italy
    'JE': 'Europe', // Jersey
    'LI': 'Europe', // Liechtenstein
    'LT': 'Europe', // Lithuania
    'LU': 'Europe', // Luxembourg
    'LV': 'Europe', // Latvia
    'MC': 'Europe', // Monaco
    'MD': 'Europe', // Moldova
    'ME': 'Europe', // Montenegro
    'MK': 'Europe', // North Macedonia
    'MT': 'Europe', // Malta
    'NL': 'Europe', // Netherlands
    'NO': 'Europe', // Norway
    'PL': 'Europe', // Poland
    'PT': 'Europe', // Portugal
    'RO': 'Europe', // Romania
    'RS': 'Europe', // Serbia
    'RU': 'Europe', // Russia (transcontinental, primarily in Asia but part of Europe)
    'SE': 'Europe', // Sweden
    'SI': 'Europe', // Slovenia
    'SJ': 'Europe', // Svalbard and Jan Mayen
    'SK': 'Europe', // Slovakia
    'SM': 'Europe', // San Marino
    'TR': 'Europe', // Turkey (transcontinental)
    'UA': 'Europe', // Ukraine
    'VA': 'Europe', // Vatican City
    'XK': 'Europe', // Kosovo
    
    // Asia
    'AE': 'Asia', // United Arab Emirates
    'AF': 'Asia', // Afghanistan
    'AM': 'Asia', // Armenia
    'AZ': 'Asia', // Azerbaijan
    'BD': 'Asia', // Bangladesh
    'BH': 'Asia', // Bahrain
    'BN': 'Asia', // Brunei
    'BT': 'Asia', // Bhutan
    'CC': 'Asia', // Cocos (Keeling) Islands
    'CN': 'Asia', // China
    'CX': 'Asia', // Christmas Island
    'GE': 'Asia', // Georgia
    'HK': 'Asia', // Hong Kong
    'ID': 'Asia', // Indonesia
    'IL': 'Asia', // Israel
    'IN': 'Asia', // India
    'IO': 'Asia', // British Indian Ocean Territory
    'IQ': 'Asia', // Iraq
    'IR': 'Asia', // Iran
    'JO': 'Asia', // Jordan
    'JP': 'Asia', // Japan
    'KG': 'Asia', // Kyrgyzstan
    'KH': 'Asia', // Cambodia
    'KP': 'Asia', // North Korea
    'KR': 'Asia', // South Korea
    'KW': 'Asia', // Kuwait
    'KZ': 'Asia', // Kazakhstan
    'LA': 'Asia', // Laos
    'LB': 'Asia', // Lebanon
    'LK': 'Asia', // Sri Lanka
    'MM': 'Asia', // Myanmar
    'MN': 'Asia', // Mongolia
    'MO': 'Asia', // Macao
    'MV': 'Asia', // Maldives
    'MY': 'Asia', // Malaysia
    'NP': 'Asia', // Nepal
    'OM': 'Asia', // Oman
    'PH': 'Asia', // Philippines
    'PK': 'Asia', // Pakistan
    'PS': 'Asia', // Palestine
    'QA': 'Asia', // Qatar
    'SA': 'Asia', // Saudi Arabia
    'SG': 'Asia', // Singapore
    'SY': 'Asia', // Syria
    'TH': 'Asia', // Thailand
    'TJ': 'Asia', // Tajikistan
    'TL': 'Asia', // Timor-Leste
    'TM': 'Asia', // Turkmenistan
    'TW': 'Asia', // Taiwan
    'UZ': 'Asia', // Uzbekistan
    'VN': 'Asia', // Vietnam
    'YE': 'Asia', // Yemen
    
    // Africa
    'AO': 'Africa', // Angola
    'BF': 'Africa', // Burkina Faso
    'BI': 'Africa', // Burundi
    'BJ': 'Africa', // Benin
    'BW': 'Africa', // Botswana
    'CD': 'Africa', // Democratic Republic of the Congo
    'CF': 'Africa', // Central African Republic
    'CG': 'Africa', // Republic of the Congo
    'CI': 'Africa', // Côte d'Ivoire
    'CM': 'Africa', // Cameroon
    'CV': 'Africa', // Cape Verde
    'DJ': 'Africa', // Djibouti
    'DZ': 'Africa', // Algeria
    'EG': 'Africa', // Egypt
    'EH': 'Africa', // Western Sahara
    'ER': 'Africa', // Eritrea
    'ET': 'Africa', // Ethiopia
    'GA': 'Africa', // Gabon
    'GH': 'Africa', // Ghana
    'GM': 'Africa', // Gambia
    'GN': 'Africa', // Guinea
    'GQ': 'Africa', // Equatorial Guinea
    'GW': 'Africa', // Guinea-Bissau
    'KE': 'Africa', // Kenya
    'KM': 'Africa', // Comoros
    'LR': 'Africa', // Liberia
    'LS': 'Africa', // Lesotho
    'LY': 'Africa', // Libya
    'MA': 'Africa', // Morocco
    'MG': 'Africa', // Madagascar
    'ML': 'Africa', // Mali
    'MR': 'Africa', // Mauritania
    'MU': 'Africa', // Mauritius
    'MW': 'Africa', // Malawi
    'MZ': 'Africa', // Mozambique
    'NA': 'Africa', // Namibia
    'NE': 'Africa', // Niger
    'NG': 'Africa', // Nigeria
    'RE': 'Africa', // Réunion
    'RW': 'Africa', // Rwanda
    'SC': 'Africa', // Seychelles
    'SD': 'Africa', // Sudan
    'SH': 'Africa', // Saint Helena
    'SL': 'Africa', // Sierra Leone
    'SN': 'Africa', // Senegal
    'SO': 'Africa', // Somalia
    'SS': 'Africa', // South Sudan
    'ST': 'Africa', // São Tomé and Príncipe
    'SZ': 'Africa', // Eswatini (Swaziland)
    'TD': 'Africa', // Chad
    'TG': 'Africa', // Togo
    'TN': 'Africa', // Tunisia
    'TZ': 'Africa', // Tanzania
    'UG': 'Africa', // Uganda
    'YT': 'Africa', // Mayotte
    'ZA': 'Africa', // South Africa
    'ZM': 'Africa', // Zambia
    'ZW': 'Africa', // Zimbabwe
    
    // North America
    'AG': 'North America', // Antigua and Barbuda
    'AI': 'North America', // Anguilla
    'AW': 'North America', // Aruba
    'BB': 'North America', // Barbados
    'BL': 'North America', // Saint Barthélemy
    'BM': 'North America', // Bermuda
    'BQ': 'North America', // Bonaire, Sint Eustatius and Saba
    'BS': 'North America', // Bahamas
    'BZ': 'North America', // Belize
    'CA': 'North America', // Canada
    'CR': 'North America', // Costa Rica
    'CU': 'North America', // Cuba
    'CW': 'North America', // Curaçao
    'DM': 'North America', // Dominica
    'DO': 'North America', // Dominican Republic
    'GD': 'North America', // Grenada
    'GL': 'North America', // Greenland
    'GP': 'North America', // Guadeloupe
    'GT': 'North America', // Guatemala
    'HN': 'North America', // Honduras
    'HT': 'North America', // Haiti
    'JM': 'North America', // Jamaica
    'KN': 'North America', // Saint Kitts and Nevis
    'KY': 'North America', // Cayman Islands
    'LC': 'North America', // Saint Lucia
    'MF': 'North America', // Saint Martin
    'MQ': 'North America', // Martinique
    'MS': 'North America', // Montserrat
    'MX': 'North America', // Mexico
    'NI': 'North America', // Nicaragua
    'PA': 'North America', // Panama
    'PM': 'North America', // Saint Pierre and Miquelon
    'PR': 'North America', // Puerto Rico
    'SV': 'North America', // El Salvador
    'SX': 'North America', // Sint Maarten
    'TC': 'North America', // Turks and Caicos Islands
    'TT': 'North America', // Trinidad and Tobago
    'US': 'North America', // United States
    'VC': 'North America', // Saint Vincent and the Grenadines
    'VG': 'North America', // British Virgin Islands
    'VI': 'North America', // U.S. Virgin Islands
    
    // South America
    'AR': 'South America', // Argentina
    'BO': 'South America', // Bolivia
    'BR': 'South America', // Brazil
    'CL': 'South America', // Chile
    'CO': 'South America', // Colombia
    'EC': 'South America', // Ecuador
    'FK': 'South America', // Falkland Islands
    'GF': 'South America', // French Guiana
    'GY': 'South America', // Guyana
    'PE': 'South America', // Peru
    'PY': 'South America', // Paraguay
    'SR': 'South America', // Suriname
    'UY': 'South America', // Uruguay
    'VE': 'South America', // Venezuela
    
    // Oceania
    'AS': 'Oceania', // American Samoa
    'AU': 'Oceania', // Australia
    'CK': 'Oceania', // Cook Islands
    'FJ': 'Oceania', // Fiji
    'FM': 'Oceania', // Micronesia
    'GU': 'Oceania', // Guam
    'KI': 'Oceania', // Kiribati
    'MH': 'Oceania', // Marshall Islands
    'MP': 'Oceania', // Northern Mariana Islands
    'NC': 'Oceania', // New Caledonia
    'NF': 'Oceania', // Norfolk Island
    'NR': 'Oceania', // Nauru
    'NU': 'Oceania', // Niue
    'NZ': 'Oceania', // New Zealand
    'PF': 'Oceania', // French Polynesia
    'PG': 'Oceania', // Papua New Guinea
    'PN': 'Oceania', // Pitcairn Islands
    'PW': 'Oceania', // Palau
    'SB': 'Oceania', // Solomon Islands
    'TK': 'Oceania', // Tokelau
    'TO': 'Oceania', // Tonga
    'TV': 'Oceania', // Tuvalu
    'UM': 'Oceania', // U.S. Minor Outlying Islands
    'VU': 'Oceania', // Vanuatu
    'WF': 'Oceania', // Wallis and Futuna
    'WS': 'Oceania', // Samoa
    
    // Antarctica
    'AQ': 'Antarctica', // Antarctica
    'BV': 'Antarctica', // Bouvet Island
    'GS': 'Antarctica', // South Georgia and the South Sandwich Islands
    'HM': 'Antarctica', // Heard Island and McDonald Islands
    'TF': 'Antarctica'  // French Southern Territories
};

let allSpots = [];
let filteredSpots = [];
let refreshInterval;
let countdownInterval;
let secondsUntilRefresh = 30;

function updateRefreshTimer() {
    const timerElement = document.getElementById('refreshTimer');
    if (timerElement) {
        timerElement.textContent = `${secondsUntilRefresh}s`;
    }
    secondsUntilRefresh--;
    
    if (secondsUntilRefresh < 0) {
        secondsUntilRefresh = 30;
    }
}

function resetRefreshTimer() {
    secondsUntilRefresh = 30;
    updateRefreshTimer();
}

function getContinent(locationDesc) {
    if (!locationDesc) return 'Unknown';
    const countryCode = locationDesc.split('-')[0];
    return CONTINENT_MAP[countryCode] || 'Unknown';
}

function getCountry(locationDesc) {
    if (!locationDesc) return null;
    return locationDesc.split('-')[0];
}

function getBand(frequency) {
    const freq = parseFloat(frequency);
    if (freq >= 1800 && freq < 2000) return '160m';
    if (freq >= 3500 && freq < 4000) return '80m';
    if (freq >= 7000 && freq < 7300) return '40m';
    if (freq >= 10100 && freq < 10150) return '30m';
    if (freq >= 14000 && freq < 14350) return '20m';
    if (freq >= 18068 && freq < 18168) return '17m';
    if (freq >= 21000 && freq < 21450) return '15m';
    if (freq >= 24890 && freq < 24990) return '12m';
    if (freq >= 28000 && freq < 29700) return '10m';
    if (freq >= 50000 && freq < 54000) return '6m';
    return 'Other';
}

function formatTime24h(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function applyFilters() {
    const continent = document.getElementById('continentFilter').value;
    const country = document.getElementById('countryFilter').value;
    const mode = document.getElementById('modeFilter').value;
    const band = document.getElementById('bandFilter').value;
    const search = document.getElementById('searchFilter').value.toLowerCase();

    // Save filter settings to localStorage
    localStorage.setItem('potaFilters', JSON.stringify({
        continent,
        country,
        mode,
        band,
        search
    }));

    // Update country filter based on continent selection
    updateCountryFilter(continent);

    filteredSpots = allSpots.filter(spot => {
        if (continent && getContinent(spot.locationDesc) !== continent) return false;
        if (country && getCountry(spot.locationDesc) !== country) return false;
        if (mode && spot.mode !== mode) return false;
        if (band && getBand(spot.frequency) !== band) return false;
        if (search) {
            const searchStr = `${spot.activator} ${spot.reference} ${spot.name}`.toLowerCase();
            if (!searchStr.includes(search)) return false;
        }
        return true;
    });

    displaySpots();
    updateStats();
}

function updateCountryFilter(selectedContinent) {
    let countries;
    
    if (selectedContinent) {
        // Filter countries by selected continent
        countries = [...new Set(
            allSpots
                .filter(s => getContinent(s.locationDesc) === selectedContinent)
                .map(s => getCountry(s.locationDesc))
                .filter(c => c)
        )].sort();
    } else {
        // Show all countries
        countries = [...new Set(allSpots.map(s => getCountry(s.locationDesc)).filter(c => c))].sort();
    }

    const currentCountry = document.getElementById('countryFilter').value;
    
    document.getElementById('countryFilter').innerHTML = 
        '<option value="">All Countries</option>' +
        countries.map(c => `<option value="${c}">${c}</option>`).join('');
    
    // Restore country selection if it's still valid
    if (currentCountry && countries.includes(currentCountry)) {
        document.getElementById('countryFilter').value = currentCountry;
    } else {
        document.getElementById('countryFilter').value = '';
    }
}

function displaySpots() {
    const container = document.getElementById('spotsContainer');
    
    if (filteredSpots.length === 0) {
        container.innerHTML = '<div class="loading">No spots found</div>';
        return;
    }

    container.innerHTML = filteredSpots.map(spot => `
        <div class="spot-card">
            <div class="spot-header">
                <div class="activator">${spot.activator}</div>
                <div class="frequency">${(parseFloat(spot.frequency) / 1000).toFixed(3)} MHz</div>
            </div>
            <div class="spot-info">
                <div class="info-item">
                    <span class="info-label">Mode</span>
                    <span class="badge badge-mode">${spot.mode}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Band</span>
                    <span class="badge badge-band">${getBand(spot.frequency)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Continent</span>
                    <span class="badge badge-continent">${getContinent(spot.locationDesc)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Reference</span>
                    <a href="https://pota.app/#/park/${spot.reference}" target="_blank" rel="noopener noreferrer" class="reference-link">${spot.reference}</a>
                </div>
                <div class="info-item">
                    <span class="info-label">Location</span>
                    <span class="info-value">${spot.locationDesc}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Time</span>
                    <span class="info-value">${formatTime24h(spot.spotTime)}</span>
                </div>
            </div>
            <div class="park-name">📍 ${spot.name}</div>
            ${spot.comments ? `<div class="comments">💬 ${spot.comments}</div>` : ''}
        </div>
    `).join('');
}

function updateStats() {
    // Statistics for ALL spots
    const allModes = {};
    const allBands = {};
    const allContinents = {};
    const allActivators = new Set();

    allSpots.forEach(spot => {
        allModes[spot.mode] = (allModes[spot.mode] || 0) + 1;
        const band = getBand(spot.frequency);
        allBands[band] = (allBands[band] || 0) + 1;
        const continent = getContinent(spot.locationDesc);
        allContinents[continent] = (allContinents[continent] || 0) + 1;
        allActivators.add(spot.activator);
    });

    document.getElementById('totalActivators').textContent = allActivators.size;
    document.getElementById('totalModes').textContent = Object.keys(allModes).length;
    document.getElementById('totalBands').textContent = Object.keys(allBands).length;
    document.getElementById('totalContinents').textContent = Object.keys(allContinents).length;

    // Statistics for FILTERED spots
    const filteredModes = {};
    const filteredBands = {};
    const filteredContinents = {};
    const filteredActivators = new Set();

    filteredSpots.forEach(spot => {
        filteredModes[spot.mode] = (filteredModes[spot.mode] || 0) + 1;
        const band = getBand(spot.frequency);
        filteredBands[band] = (filteredBands[band] || 0) + 1;
        const continent = getContinent(spot.locationDesc);
        filteredContinents[continent] = (filteredContinents[continent] || 0) + 1;
        filteredActivators.add(spot.activator);
    });

    document.getElementById('filteredActivators').textContent = filteredActivators.size;
    document.getElementById('filteredModes').textContent = Object.keys(filteredModes).length;
    document.getElementById('filteredBands').textContent = Object.keys(filteredBands).length;
    document.getElementById('filteredContinents').textContent = Object.keys(filteredContinents).length;
}

function populateFilters() {
    const continents = [...new Set(allSpots.map(s => getContinent(s.locationDesc)))].sort();
    const modes = [...new Set(allSpots.map(s => s.mode).filter(m => m && m.trim()))].sort();
    const bands = [...new Set(allSpots.map(s => getBand(s.frequency)))].sort();

    document.getElementById('continentFilter').innerHTML = 
        '<option value="">All Continents</option>' +
        continents.map(c => `<option value="${c}">${c}</option>`).join('');

    document.getElementById('modeFilter').innerHTML = 
        '<option value="">All Modes</option>' +
        modes.map(m => `<option value="${m}">${m}</option>`).join('');

    document.getElementById('bandFilter').innerHTML = 
        '<option value="">All Bands</option>' +
        bands.map(b => `<option value="${b}">${b}</option>`).join('');
    
    // Restore saved filters
    restoreFilters();
}

function restoreFilters() {
    try {
        const savedFilters = localStorage.getItem('potaFilters');
        if (savedFilters) {
            const filters = JSON.parse(savedFilters);
            document.getElementById('continentFilter').value = filters.continent || '';
            document.getElementById('modeFilter').value = filters.mode || '';
            document.getElementById('bandFilter').value = filters.band || '';
            document.getElementById('searchFilter').value = filters.search || '';
            
            // Update country filter based on continent, then restore country value
            updateCountryFilter(filters.continent || '');
            if (filters.country) {
                document.getElementById('countryFilter').value = filters.country;
            }
            
            // Check if filters are active
            checkActiveFilters();
        }
    } catch (e) {
        console.error('Error restoring filters:', e);
    }
}

async function loadSpots() {
    try {
        const isInitialLoad = allSpots.length === 0;
        
        if (isInitialLoad) {
            document.getElementById('spotsContainer').innerHTML = '<div class="loading">Loading spots...</div>';
        }
        
        // Reset refresh timer
        resetRefreshTimer();
        
        const response = await fetch('https://api.pota.app/spot/');
        if (!response.ok) throw new Error('API Error');
        
        const rawSpots = await response.json();
        
        // Keep only the newest spot per activator
        const spotsByActivator = {};
        rawSpots.forEach(spot => {
            const activator = spot.activator;
            const spotTime = new Date(spot.spotTime);
            
            if (!spotsByActivator[activator] || new Date(spotsByActivator[activator].spotTime) < spotTime) {
                spotsByActivator[activator] = spot;
            }
        });
        
        allSpots = Object.values(spotsByActivator);
        
        // Reapply filters with saved values
        applyFilters();
        
        // Populate filter options only on first load or when available options change
        if (isInitialLoad) {
            populateFilters();
        }
        
    } catch (error) {
        document.getElementById('spotsContainer').innerHTML = 
            `<div class="error">Error loading spots: ${error.message}</div>`;
    }
}

// Filter toggle functionality
function toggleFilters() {
    const filtersContainer = document.getElementById('filtersContainer');
    const toggleButton = document.getElementById('filterToggle');
    
    filtersContainer.classList.toggle('collapsed');
    toggleButton.classList.toggle('collapsed');
    
    // Save state to localStorage
    localStorage.setItem('filtersCollapsed', filtersContainer.classList.contains('collapsed'));
}

// Check if any filters are active
function checkActiveFilters() {
    const continent = document.getElementById('continentFilter').value;
    const country = document.getElementById('countryFilter').value;
    const mode = document.getElementById('modeFilter').value;
    const band = document.getElementById('bandFilter').value;
    const search = document.getElementById('searchFilter').value;
    
    const hasActiveFilters = continent || country || mode || band || search;
    const badge = document.getElementById('filterActiveBadge');
    badge.style.display = hasActiveFilters ? 'inline' : 'none';
}

// Restore filter collapsed state
function restoreFilterState() {
    const collapsed = localStorage.getItem('filtersCollapsed') === 'true';
    
    // On mobile (width < 768px), default to collapsed
    const isMobile = window.innerWidth < 768;
    const shouldCollapse = collapsed || (isMobile && localStorage.getItem('filtersCollapsed') === null);
    
    if (shouldCollapse) {
        document.getElementById('filtersContainer').classList.add('collapsed');
        document.getElementById('filterToggle').classList.add('collapsed');
    }
}

// Event Listeners
document.getElementById('filterToggle').addEventListener('click', toggleFilters);
document.getElementById('continentFilter').addEventListener('change', () => { applyFilters(); checkActiveFilters(); });
document.getElementById('countryFilter').addEventListener('change', () => { applyFilters(); checkActiveFilters(); });
document.getElementById('modeFilter').addEventListener('change', () => { applyFilters(); checkActiveFilters(); });
document.getElementById('bandFilter').addEventListener('change', () => { applyFilters(); checkActiveFilters(); });
document.getElementById('searchFilter').addEventListener('input', () => { applyFilters(); checkActiveFilters(); });

// Restore filter state on load
restoreFilterState();

// Update version display
if (typeof VERSION_INFO !== 'undefined') {
    document.getElementById('versionDisplay').textContent = `${VERSION_INFO.commit} (${VERSION_INFO.date})`;
} else {
    document.getElementById('versionDisplay').textContent = 'dev';
}

// Initial Load
loadSpots();

// Start countdown timer (updates every second)
countdownInterval = setInterval(updateRefreshTimer, 1000);

// Auto-refresh every 30 seconds
refreshInterval = setInterval(loadSpots, 30000);
