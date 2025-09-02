const cameraController = {
  camera: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  followSpeed: 0.08,
  target: null,

  updateCamera() {
    this.camera.x += this.followSpeed * (this.target.x - this.camera.x);
    this.camera.y += this.followSpeed * (this.target.y - this.camera.y);
    this.camera.zoom += this.followSpeed * (this.target.zoom - this.camera.zoom);
  },

  setCameraTarget(newTarget) {
    this.target = { ...newTarget };
  },
};

// Initialize target as camera itself
cameraController.target = { ...cameraController.camera };

export default cameraController;