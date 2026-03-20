// tapDetector.js

/**
 * Utility for detecting tap patterns on a device.
 */

class TapDetector {
    constructor() {
        this.tapCount = 0;
        this.lastTapTime = 0;
    }

    detectTap() {
        const currentTime = Date.now();

        // Only count taps that are at least 300 ms apart
        if (currentTime - this.lastTapTime > 300) {
            this.tapCount++;
            this.lastTapTime = currentTime;
            console.log(`Tap detected! Count: ${this.tapCount}`);
        }
    }

    resetTapCount() {
        this.tapCount = 0;
        console.log('Tap count reset.');
    }
}

// Exporting the TapDetector class for use in other modules
module.exports = TapDetector;
