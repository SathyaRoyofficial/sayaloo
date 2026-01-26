"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/sections/Intro";
import Reasons from "./components/sections/Reasons";
import MemoryCheckpoint from "./components/sections/MemoryCheckpoint";
import Timeline from "./components/sections/Timeline";
import Gallery from "./components/sections/Gallery";
import LoveLetter from "./components/sections/LoveLetter";
import VoiceMessage from "./components/sections/VoiceMessage";
import VideoSurprise from "./components/sections/VideoSurprise";
import Proposal from "./components/sections/Proposal";
import Celebration from "./components/sections/Celebration";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => prev + 1);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: return <Intro onNext={nextSection} />;
      case 1: return <Reasons onNext={nextSection} />;
      case 2: return <MemoryCheckpoint onNext={nextSection} checkpointId="memory1" />;
      case 3: return <Timeline onNext={nextSection} />;
      case 4: return <MemoryCheckpoint onNext={nextSection} checkpointId="memory2" />;
      case 5: return <Gallery onNext={nextSection} />;
      case 6: return <MemoryCheckpoint onNext={nextSection} checkpointId="memory3" />;
      case 7: return <LoveLetter onNext={nextSection} />;
      case 8: return <VoiceMessage onNext={nextSection} />;
      case 9: return <MemoryCheckpoint onNext={nextSection} checkpointId="heartCheckpoint" />;
      case 10: return <VideoSurprise onNext={nextSection} />;
      case 11: return <MemoryCheckpoint onNext={nextSection} checkpointId="finalLock" />;
      case 12: return <Proposal onNext={nextSection} />;
      case 13: return <Celebration />;
      default: return <Celebration />;
    }
  };

  return (
    <main className="overflow-hidden bg-background min-h-screen w-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full min-h-screen"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
