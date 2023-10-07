import React from 'react';
import '../css/fadein.scss';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    if (!window.IntersectionObserver) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

  }, []);
  
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

// EXAMPLE USAGE

// function App() {
//   return (
//     <div className="App">
//       <h1>All the CSS colors!</h1>

//       {colors.map(color => (
//         <FadeInSection key={color}>
//           <div className="box" style={{ backgroundColor: color }}>
//             <span>{color}</span>
//           </div>
//         </FadeInSection>
//       ))}
//     </div>
//   );
// }