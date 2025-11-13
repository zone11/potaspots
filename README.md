# POTA Spots

A real-time web application for filtering and monitoring Parks on the Air (POTA) activations.

## Features

- **Live Updates**: Automatically refreshes spots every 30 seconds
- **Automatic Versioning**: GitHub Actions automatically updates version info (commit SHA + date) on each push
- **Collapsible Filters**: Compact filter interface with toggle functionality, auto-collapsed on mobile
- **Multi-Level Filtering**:
  - Continent (with cascading country filter)
  - Country (dynamically filtered by selected continent)
  - Mode (CW, SSB, FT8, etc.)
  - Band (160m - 6m)
  - Text search (callsign, park reference, park name)
- **Persistent Filters**: Your filter settings are saved and restored on page reload
- **Statistics Dashboard**: Shows total and filtered counts for activators, modes, bands, and continents
- **Dark Theme**: High-contrast design optimized for readability
- **Deduplication**: Shows only the most recent spot per activator

## Automatic Versioning

The application uses GitHub Actions to automatically update version information:
- **Commit SHA**: Short commit hash (7 characters)
- **Commit Date**: Date and time of last commit
- Updates on every push to main branch
- Version displayed in header after GitHub link

### How it works

1. GitHub Actions workflow (`.github/workflows/update-version.yml`) runs on push
2. Generates `version.js` with current commit info
3. Automatically commits and pushes updated version file
4. Application loads and displays version from `version.js`

## API

Uses the official POTA API: `https://api.pota.app/spot/`

## Browser Compatibility

Works with all modern browsers supporting:
- ES6 JavaScript
- Fetch API
- LocalStorage
- CSS Grid & Flexbox
