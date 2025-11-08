# POTA Live Spots

A real-time web application for filtering and monitoring Parks on the Air (POTA) activations.

## Features

- **Live Updates**: Automatically refreshes spots every 30 seconds
- **Multi-Level Filtering**:
  - Continent (with cascading country filter)
  - Country (dynamically filtered by selected continent)
  - Mode (CW, SSB, FT8, etc.)
  - Band (160m - 6m)
  - Text search (callsign, park reference, park name)
- **Persistent Filters**: Your filter settings are saved and restored on page reload
- **Statistics Dashboard**: Shows total and filtered counts for activators, modes, bands, and continents
- **Dark Theme**: High-contrast design optimized for readability

## API

Uses the official POTA API: `https://api.pota.app/spot/`

## Browser Compatibility

Works with all modern browsers supporting:
- ES6 JavaScript
- Fetch API
- LocalStorage
- CSS Grid & Flexbox
