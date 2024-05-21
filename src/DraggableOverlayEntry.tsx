import { createRoot } from 'react-dom/client';
import DraggableOverlay from './DraggableOverlay';
const container = document.getElementById('draggable-overlay-container');

if (container) {
  const root = createRoot(container);
  root.render(<DraggableOverlay />);
}
