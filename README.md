# LoRaWAN-based Emergency Communication Module

## Overview
This project is a **LoRaWAN-based Emergency Communication Module** designed for enhanced connectivity and disaster management. The goal is to allow survivors in distress to send an SOS message with their GPS location using LoRa technology. The receiver (base station) will then display the SOS signal and the coordinates of the survivor on a map.

---

## Features
- **Real-time SOS Communication:** LoRa devices send SOS messages with GPS coordinates.
- **Interactive Map:** Coordinates are displayed on an interactive map using **Leaflet**.
- **Web Interface:** Simple web interface to view SOS locations and reset the map.
- **Tracking Multiple SOS Messages (Future Feature):** Ability to track multiple SOS messages (planned for future updates).

---

## Project Structure
- **Frontend:**
  - HTML
  - CSS (Leaflet for maps)
  - JavaScript (WebSocket for communication)
  
- **Backend:**
  - WebSocket server to handle the real-time SOS data
  - LoRa Communication (Simulated with mock data for testing)

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/LoRaWAN.git
   cd LoRaWAN
   npm install
   node server.js

