import { Application } from "@hotwired/stimulus"
import { registerables } from "chart.js" // Import Chart.js

import DashboardController from "controllers/dashboard_controller" // Import your controller

// Initialize Stimulus
const application = Application.start()
application.register("dashboard", DashboardController) // Register the Stimulus controller

// Register Chart.js components
import { Chart } from "chart.js"
Chart.register(...registerables)
