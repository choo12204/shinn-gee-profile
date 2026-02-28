export interface ProjectData {
  id: string;
  num: string;
  title: string;
  titleEm: string;
  description: string;
  overview: string;
  overviewExtra?: string;
  tags: string[];
  meta: string[];
  role: string;
  duration: string;
  type: string;
  status: string;
  features: string[];
  process: string;
  processExtra?: string;
  liveLink?: string;
  githubLink?: string;
}

export const projects: ProjectData[] = [
  {
    id: "1",
    num: "01",
    title: "5-DOF",
    titleEm: "Robotic Arm",
    description: "Your robotics anchor featuring URDF/Xacro modelling, kinematic validation, and planned ROS2 Control integration.",
    overview: "This project serves as a comprehensive robotics anchor, focusing on the end-to-end development of a 5-Degree-of-Freedom robotic arm. It covers everything from structural modelling to complex kinematic validation in a ROS2 environment.",
    overviewExtra: "The project leverages URDF and Xacro for modular robot description, allowing for rapid iteration and precise physical attribute definition essential for accurate simulation and control.",
    tags: ["ROS2", "URDF", "Control"],
    meta: ["ROS2", "C++", "Python", "2026", "Robotics"],
    role: "Robotics Engineer",
    duration: "Ongoing",
    type: "Core Project",
    status: "In Development",
    features: [
      "Modular URDF/Xacro modelling",
      "Rigorous Kinematic validation",
      "Planned ROS2 Control integration",
      "MoveIt motion planning setup",
      "Future trajectory control development",
      "Simulation-to-hardware validation pipeline"
    ],
    process: "The development process prioritised model accuracy and physical consistency. By using Xacro, the model was kept clean and manageable, while kinematic solvers were tested against mathematical expectations to ensure reliable motion planning.",
    processExtra: "Next steps involve integrating MoveIt for advanced collision avoidance and trajectory generation, followed by validation against real-world hardware constraints.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "2",
    num: "02",
    title: "Vehicle Dynamics",
    titleEm: "Simulink Model",
    description: "Mathematical system modelling for Team Bath Racing Electric, mapping driver input to dynamic response.",
    overview: "Developed for Team Bath Racing Electric, this Simulink model focuses on generating G-G diagrams to analyze vehicle performance limits. It provides a mathematical foundation for understanding dynamic responses under various driving conditions.",
    overviewExtra: "By mapping driver inputs like steering and acceleration to vehicle-level dynamic responses, the model enables detailed sensitivity analysis and performance optimization within real engineering constraints.",
    tags: ["MATLAB", "Simulink", "Dynamics"],
    meta: ["MATLAB", "Simulink", "Automotive", "2025", "TBRE"],
    role: "Control Systems Engineer",
    duration: "4 Months",
    type: "Team Project",
    status: "Validated",
    features: [
      "High-fidelity system modelling",
      "G-G Diagram generation",
      "Driver input to response mapping",
      "Detailed Sensitivity analysis",
      "Real-world engineering constraint integration",
      "Performance envelope visualization"
    ],
    process: "The modelling phase involved translating physical vehicle parameters into differential equations. These were implemented in Simulink, allowing for iterative testing against telemetry data provided by the racing team.",
    processExtra: "This project demonstrated the ability to handle complex mathematical models and convert them into actionable engineering insights for vehicle setup and driver training.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "3",
    num: "03",
    title: "Prosthetic",
    titleEm: "Wristband",
    description: "Closed-loop system with ESP32 and FSR filtering for Team Bath Prosthetics, featuring real-time control.",
    overview: "A sophisticated closed-loop prosthetic wristband developed for Team Bath Prosthetics. It utilizes ESP32-based embedded intelligence to process sensor data and coordinate real-time control of prosthetic movements.",
    overviewExtra: "The system features advanced signal filtering for Force Sensitive Resistors (FSR), ensuring high-fidelity input even in noisy environments. Wireless coordination and cloud telemetry allow for remote monitoring and data logging.",
    tags: ["ESP32", "FSR", "Embedded"],
    meta: ["ESP32", "C++", "IoT", "2025", "TBP"],
    role: "Embedded Systems Lead",
    duration: "6 Months",
    type: "Biomedical Project",
    status: "Prototype",
    features: [
      "Real-time signal filtering",
      "Closed-loop control logic",
      "ESP32 wireless coordination",
      "Cloud-based telemetry and logging",
      "FSR sensor array integration",
      "Low-power optimization for wearable use"
    ],
    process: "The core challenge was implementing a filtering algorithm that could distinguish intentional muscle movements from random noise. Using an iterative approach, the control loop was tuned to provide natural-feeling responsiveness for the user.",
    processExtra: "Wireless integration was achieved via MQTT for cloud logging, enabling long-term analysis of usage patterns and device performance.",
    githubLink: "https://github.com/choo12204"
  },
  {
    id: "4",
    num: "04",
    title: "Self-Balancing",
    titleEm: "Robot",
    description: "Control foundation project focusing on IMU integration and PID tuning for stability debugging.",
    overview: "This project serves as a fundamental exploration of control theory, focusing on the stability of a 2-wheeled inverted pendulum. It required deep integration of IMU data and rigorous PID tuning to maintain vertical equilibrium.",
    overviewExtra: "The robot uses sensor fusion to combine accelerometer and gyroscope data, providing a stable tilt angle estimate. This estimate is then fed into a PID controller to drive the motors and counteract falling motions.",
    tags: ["PID", "IMU", "Robotics"],
    meta: ["Arduino", "C++", "Control Theory", "2024", "Personal"],
    role: "Robotics Developer",
    duration: "2 Months",
    type: "Control Project",
    status: "Completed",
    features: [
      "High-speed IMU integration",
      "Complementary/Kalman filtering",
      "Precision PID tuning",
      "Real-time stability debugging",
      "Motor encoder feedback loop",
      "Dynamic response analysis"
    ],
    process: "Starting with a basic P-controller, the system was evolved by adding Integral and Derivative terms. Stability was achieved through hundreds of iterations of gain adjustment, observing the robot's response to external disturbances.",
    processExtra: "This project laid the groundwork for understanding non-linear system stability and the practical challenges of sensor noise and actuator latency.",
    githubLink: "https://github.com/choo12204"
  }
];
