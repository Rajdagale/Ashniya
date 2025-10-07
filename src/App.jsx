// import React, { useEffect, useRef, useState } from 'react';

// export default function App() {
//   const [stage, setStage] = useState(0); // 0-intro,1-wish,2-memories,3-letter,4-final
//   const [typed, setTyped] = useState('');
//   const [showMoonNote, setShowMoonNote] = useState(false);
//   const rootRef = useRef(null);

//   const typedFull =
//     "Even though we've taken different paths, you'll always be one of the most beautiful parts of my story. Wishing you a peaceful and joyful birthday — sincerely, Raj.";

//   // Inject styles
//   useEffect(() => {
//     if (document.getElementById('birthday-magic-styles')) return;
//     const style = document.createElement('style');
//     style.id = 'birthday-magic-styles';
//     style.innerHTML = `
//       :root {--accent:linear-gradient(90deg,#ff70a6,#a18cd1);}
//       * {box-sizing:border-box;}
//       html, body, #root {min-height: 100%; margin:0;}
//       body {font-family:'Poppins',system-ui; background: linear-gradient(135deg, #ffe5f0, #fff0d4); color:#333;}
      
//       .container {min-height:100vh; display:flex; align-items:center; justify-content:center; padding:16px;}
      
//       .card {
//         width: 100%;
//         max-width: 920px;
//         background: rgba(255,255,255,0.95);
//         border-radius: 18px;
//         padding: 24px;
//         box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//         position: relative;
//         overflow: visible;
//       }
      
//       header.topbar {display:flex; justify-content:space-between; align-items:center; padding:10px 6px;}
//       .title {font-family:'Dancing Script',cursive; font-size:28px; color:#ff6b6b;}
//       .moon {width:46px; height:46px; border-radius:50%; background:conic-gradient(#fff2,#ffd9); display:flex; align-items:center; justify-content:center; color:#333; font-weight:700; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.2);}
      
//       .stageArea {padding:18px; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; text-align:center; width:100%;}
      
//       .bigWish {
//         font-size: clamp(40px, 10vw, 70px);
//         font-weight: 900;
//         background: linear-gradient(90deg,#ff6b6b,#f8c291,#6a89cc,#82ccdd,#fab1a0);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         text-shadow: 0 0 4px #ff6b6b,0 0 8px #f8c291,0 0 12px #6a89cc,0 0 16px #82ccdd,0 0 20px #fab1a0;
//         animation: gradientShift 4s ease infinite;
//       }
//       @keyframes gradientShift {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
      
//       .subtitle {color:#555; margin-top:8px; line-height:1.6;}
//       .btn {margin-top:18px; padding:12px 18px; border-radius:12px; background: var(--accent); border:none; color:white; font-weight:600; cursor:pointer; box-shadow:0 6px 18px rgba(161,140,209,0.18);}
//       .hearts-layer {position:absolute; inset:0; pointer-events:none;}
//       .heart {position:absolute; width:16px; height:16px; background:radial-gradient(circle at 30% 30%, #ff477e, #ff006e); transform:rotate(45deg); pointer-events:none; transition:all 2s ease-out; opacity:0.9; z-index:9999;}
//       .heart::before,.heart::after {content:""; position:absolute; width:16px; height:16px; background:radial-gradient(circle at 30% 30%, #ff477e,#ff006e); border-radius:50%;}
//       .heart::before{top:-8px; left:0;} .heart::after{top:0; left:-8px;}
//       .modal {position:fixed; left:50%; top:50%; transform:translate(-50%,-50%); background:rgba(255,255,255,0.95); border-radius:12px; padding:18px; box-shadow:0 12px 40px rgba(0,0,0,0.2); max-width:90%; width:420px; color:#333;}
//       .closeX {position:absolute; right:8px; top:8px; cursor:pointer;}
      
//       .memoriesContainer {display:flex; gap:16px; overflow-x:auto; padding-bottom:12px; scroll-snap-type:x mandatory; width:100%;}
//       .memoryCard {min-width:220px; height:150px; border-radius:16px; background-size:cover; background-position:center; flex-shrink:0; scroll-snap-align:start; transition: transform 0.4s ease; cursor:pointer;}
//       .memoryCard:hover {transform: scale(1.05);}
      
//       @media (max-width:600px){
//         .card{padding:16px; border-radius:14px; width:95%;}
//         .title{font-size:20px;}
//         .stageArea{min-height:auto;}
//         .memoriesContainer{flex-direction:column; gap:12px; overflow-x:visible;}
//         .memoryCard{min-width:100%; height:200px;}
//         .btn{width:100%; font-size:16px;}
//       }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   // Typewriter effect
//   useEffect(() => {
//     if (stage !== 3) return;
//     let idx = 0;
//     setTyped('');
//     const timer = setInterval(() => {
//       idx++;
//       setTyped(typedFull.slice(0, idx));
//       if (idx >= typedFull.length) clearInterval(timer);
//     }, 28);
//     return () => clearInterval(timer);
//   }, [stage]);

//   // Floating hearts
//   useEffect(() => {
//     const createHeart = (x, y) => {
//       const heart = document.createElement('div');
//       heart.className = 'heart';
//       heart.style.left = `${x}px`;
//       heart.style.top = `${y}px`;
//       document.body.appendChild(heart);
//       setTimeout(() => { heart.style.transform = 'translateY(-80px) scale(1.2)'; heart.style.opacity = '0'; }, 10);
//       setTimeout(() => heart.remove(), 2000);
//     };
//     const handleClick = (e) => createHeart(e.pageX, e.pageY);
//     const handleTouch = (e) => createHeart(e.touches[0].pageX, e.touches[0].pageY);
//     window.addEventListener('click', handleClick);
//     window.addEventListener('touchstart', handleTouch);
//     return () => { window.removeEventListener('click', handleClick); window.removeEventListener('touchstart', handleTouch); };
//   }, []);

//   return (
//     <div ref={rootRef} className="container">
//       <div className="card">
//         <header className="topbar">
//           <div className="title">🎉</div>
//           <div className="moon" title="Click the moon 🌙" onClick={(e)=>{e.stopPropagation(); setShowMoonNote(true);}}>🌙</div>
//         </header>

//         <div className="stageArea">
//           {stage===0 && <>
//             <h2 style={{fontSize:22,marginBottom:10}}>Hey Tanu(Bachu) 💖💫</h2>
//             <h2 style={{margin:'12px 0 8px',fontSize:22}}>Someone special wants to say something...</h2>
//             <p className="subtitle">Tap on half moon to see the secret massage. When you're ready...</p>
//             <button className="btn" onClick={()=>setStage(1)}>Click to Begin ✨</button>
//           </>}

//           {stage===1 && <>
//             <h1 className="bigWish">Happy Birthday 🎂💫</h1>
//             <div className="subtitle">We may have lost touch, but a part of me still wishes your day to be as beautiful as the memories we once shared. We don’t talk anymore, yet I’ll always hope your birthday brings you all the peace and happiness you deserve. Once again Happy Birthday <br/> — take care and keep smiling. 🌷</div>
//             <button className="btn" onClick={()=>setStage(2)}>Next ➜</button>
//           </>}

//           {stage===2 && <>
//             <h3 style={{marginBottom:12}}>✨ Magical Memories ✨</h3>
//             <p className="subtitle" style={{marginBottom:14}}>Here is some memories I watch every time when I feel alone😌❤️‍🩹</p>
//             <div className="memoriesContainer">
//               {[1,2,3,4,5].map(i=>(
//                 <div
//                   key={i}
//                   className="memoryCard"
//                   style={{backgroundImage:`url('/photos/photo${i}.jpg')`}}
//                   onClick={()=>setStage(3)}
//                 ></div>
//               ))}
//             </div>
//             <button className="btn" style={{marginTop:18}} onClick={()=>setStage(3)}>Read My Letter 📝</button>
//           </>}

//           {stage===3 && <>
//             <h3 style={{fontFamily:'Dancing Script, cursive'}}>My Letter</h3>
//             <p style={{textAlign:'left',fontSize:16,lineHeight:1.6,maxWidth:720}}>{typed}</p>
//             <button className="btn" onClick={()=>setStage(4)}>Reveal Final Note 💌</button>
//           </>}

//           {stage===4 && <>
//             <div style={{fontSize:20,fontWeight:700}}>— Thank you for being my favorite chapter. ❤️</div>
//             <div className="subtitle" style={{marginTop:10}}>Wishing you endless joy, Tanu.</div>
//             <button className="btn" onClick={()=>setStage(0)}>Restart ↩️</button>
//           </>}
//         </div>

//         <div className="hearts-layer"></div>
//       </div>

//       {showMoonNote && (
//         <div className="modal" onClick={(e)=>e.stopPropagation()}>
//           <div className="closeX" onClick={()=>setShowMoonNote(false)}>✖</div>
//           <h3>Secret note 🌙</h3>
//           <p>Hey Tanu, sometimes even the smallest stars shine the brightest. Wishing you peace and happiness — always. — Raj 💌</p>
//           <div style={{textAlign:'right'}}>
//             <button className="btn" onClick={()=>setShowMoonNote(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
























import React, { useEffect, useState } from 'react';

export default function App() {
  const [stage, setStage] = useState(0);
  const [typed, setTyped] = useState('');
  const [showMoonNote, setShowMoonNote] = useState(false);
  const typedFull =
    "Even though we've taken different paths, you'll always be one of the most beautiful parts of my story. Wishing you a peaceful and joyful birthday — sincerely, Raj.";

  // Inject pink-themed styles with highlighted headings, lighter card, white text
  useEffect(() => {
    if (document.getElementById('bday-pink-css')) return;
    const style = document.createElement('style');
    style.id = 'bday-pink-css';
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');

      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #ffdde1, #f8c8dc, #ffc1e3);
        overflow-x: hidden;
      }

      .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        position: relative;
      }

      .card {
        width: 100%;
        max-width: 900px;
        padding: 28px;
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 40px rgba(255, 105, 180, 0.25);
        color: #fff; /* white text */
        text-align: center;
        position: relative;
        overflow: visible;
      }

      .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .title {
        font-family: 'Dancing Script', cursive;
        font-size: 28px;
        background: linear-gradient(90deg, #ff85c0, #f8a1d1, #c49aff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.7), 0 0 12px rgba(255, 133, 192, 0.6);
      }

      h1, h2, h3 {
        font-family: 'Dancing Script', cursive;
        background: linear-gradient(90deg, #ff85c0, #f8a1d1, #c49aff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.7), 0 0 12px rgba(255, 133, 192, 0.6);
        margin: 12px 0;
      }

      .moon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, #fff, #ffd1eb);
        display:flex; align-items:center; justify-content:center;
        font-size: 24px;
        box-shadow: 0 0 15px rgba(255,140,180,0.5);
        cursor:pointer;
        transition: transform 0.3s;
      }
      .moon:hover {transform: scale(1.1) rotate(10deg);}

      .btn {
        margin-top: 18px;
        padding: 12px 22px;
        border:none;
        border-radius:30px;
        background: linear-gradient(90deg, #ff85c0, #f8a1d1, #c49aff);
        color:white;
        font-weight:600;
        cursor:pointer;
        box-shadow:0 0 12px rgba(255,133,192,0.4);
        transition:transform 0.3s;
      }
      .btn:hover {transform:scale(1.05);}

      .bigWish {
        font-size: clamp(40px, 10vw, 70px);
        font-weight: 900;
        margin: 18px 0;
      }

      .subtitle {
        color: #fff; /* white text */
        margin-top: 8px;
        line-height: 1.7;
      }

      .memoryCard {
        min-width:220px; height:150px; border-radius:16px;
        background-size:cover; background-position:center;
        transition: transform 0.4s ease;
        display:inline-block;
        margin:6px;
      }
      .memoryCard:hover {transform: scale(1.05);}

      .modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 12px 50px rgba(255, 105, 180, 0.4);
  z-index: 999;
  color: #333;

  /* NEW: smaller size */
  width: 50%;
  max-height: 60%; /* limit height */
  overflow-y: auto; /* scroll if content too long */
  text-align: center;
}

      .closeX {
        position:absolute; right:12px; top:8px;
        cursor:pointer; font-size:18px;
      }

      /* Floating hearts */
      .heart {
        position: absolute;
        width: 16px;
        height: 16px;
        background: radial-gradient(circle at 30% 30%, #ff85c0, #ff4fa1);
        transform: rotate(45deg);
        pointer-events: none;
        transition: all 2s ease-out;
        opacity: 0.9;
        z-index: 9999;
      }
      .heart::before, .heart::after {
        content:""; position:absolute; width:16px; height:16px; border-radius:50%;
        background: radial-gradient(circle at 30% 30%, #ff85c0, #ff4fa1);
      }
      .heart::before {top:-8px; left:0;}
      .heart::after {top:0; left:-8px;}

      @media(max-width:600px){
        .card{padding:16px; border-radius:14px;}
        .title{font-size:22px;}
        .memoryCard{min-width:100%; height:200px;}
        .btn{width:100%; font-size:16px;}
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (stage !== 3) return;
    let i = 0;
    setTyped('');
    const timer = setInterval(() => {
      i++;
      setTyped(typedFull.slice(0, i));
      if (i >= typedFull.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [stage]);

  // Floating hearts effect
  useEffect(() => {
    const createHeart = (x, y) => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.style.transform = `translateY(-80px) scale(1.2) rotate(${Math.random()*360}deg)`;
        heart.style.opacity = '0';
      }, 10);
      setTimeout(() => heart.remove(), 2000);
    };

    const handleClick = (e) => createHeart(e.pageX, e.pageY);
    const handleTouch = (e) => createHeart(e.touches[0].pageX, e.touches[0].pageY);

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouch);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="topbar">
          <div className="title">🎀</div>
          <div className="moon" onClick={() => setShowMoonNote(true)}>🌙</div>
        </div>

        {stage === 0 && (
          <>
            <h2>Hey Tanu (Bachu) 💖💫</h2>
            <p className="subtitle" style={{color:'#ff85c0'}}>
              Someone special wants to say something…
              <br />  
              Tap the moon 🌙 for a secret. When you're ready...
            </p>
            <button className="btn" onClick={() => setStage(1)}>Click to Begin ✨</button>
          </>
        )}

        {stage === 1 && (
          <>
          <audio id="bg-music" src="/music/happy-birthday.mp3" autoPlay loop />
            <h1 className="bigWish">Happy Birthday 💕</h1>
            <p className="subtitle" style={{color:'#ff85c0'}}>
              We may have lost touch, but a part of me still wishes your day
              to be as beautiful as the memories we once have. Even though we've taken different paths, you'll always be one of the most beautiful parts of my story. Wishing you a peaceful and joyful birthday May your
              birthday bring all the peace and happiness you deserve💖✨
            </p>
            <button className="btn" onClick={() => setStage(2)}>Next ➜</button>
          </>
        )}

        {stage === 2 && (
          <>
            <audio id="bg-music" src="/music/song.mp3" autoPlay loop />
            <h3 style={{fontFamily:'Dancing Script, cursive',fontSize:22}}>✨ Magical Memories ✨</h3>
            <p className="subtitle" style={{color:'#ff85c0'}}>
              Here are a few moments that always bring a smile. 😌❤️‍🩹
            </p>
            {[1,2,3,4,5].map(i=>(
              <div
                key={i}
                className="memoryCard"
                style={{backgroundImage:`url('/photos/photo${i}.jpg')`}}
                onClick={()=>setStage(3)}
              ></div>
            ))}
            <div><button className="btn" onClick={()=>setStage(3)}>Read My Letter 📝</button></div>
          </>
        )}

        {stage === 3 && (
          <>
            <h3 style={{fontFamily:'Dancing Script, cursive',fontSize:22}}>My Letter 💌</h3>
            <p style={{textAlign:'left', fontSize:17, lineHeight:1.6,color:'#ff85c0'}}>First of all wish you a many many happy return of the day and thankyou tu letter paryant alis ani sorry birthday cha divshi tujha mood kharab kela asel tr ny ny boltey tri me ky n ky karto tya sathi pn. I know me khup trass dila 2 mahine na nit bolo n nit rhat hoto nasti chid chid keli tyat tu boli pn ki ny sahan hot tri me ny aikla bcoz mala vattat hota ki tu chidshil rusun bashil pn asa kadhich vatla ny ki end hoil sagla me safe feel karat hoto tujha sobat ani ticha nantr pn prem zhal mala tujhavr pn mala tevha te ky dakhvtach ala ny me tevha physically stable disat hoto mentally titkach disturb hoto he tula nit sangtach navta yet mala bss dokyat kasli tri chid chid possessiveness tu pn cheat karshil hyacha vicharni kadhi tula samjun gheta alach ny tu sodun geli tevha pn tula kasa majha kade anta yeil hach vichar karat hoto tujha vr prem kami hakka jasta dakhvat hoto te kuthe tri tula irritate karat hota ani tevha cha condition madhe mala te samjlach ny nantr time gela radun zhal chid chid karun zhal shanta zhalo to paryant me sagla harun baslo hoto tula ani swatala. I lost my self yrr me move on karycha pn try kela me asa navto ki breakup zhal ani ticha athvanitch rhail but tujha athvanit rahilo asa ny ki koni ala ny try kela ny but ny zhal majha kadun. Mala khup bolycha ahe tujha sobat khup ky sangycha ahe pn atta ny force karnar me tula bss tevha majha kadun jitka chuka zhaly astil jamla tr maaf kr... One again sorry for everything 🙃 and Happy Birthday baal❤‍🩹 ani 1% hope thevun I'll always wait for you... </p>
            <button className="btn" onClick={()=>setStage(4)}>Reveal Final Note 💖</button>
          </>
        )}

        {stage === 4 && (
          <>
            <h3 style={{fontFamily:'Dancing Script, cursive'}}>— Thank you for being my favorite chapter ❤️</h3>
            {/* <p className="subtitle" style={{fontSize:22,fontWeight:700,color:'#ff85c0'}}>Wishing you endless joy, Tanu 💫</p> */}
            <button className="btn" onClick={()=>setStage(0)}>Restart ↩️</button>
          </>
        )}
      </div>

      {showMoonNote && (
        <div className="modal">
          <div className="closeX" onClick={()=>setShowMoonNote(false)}>✖</div>
          <h3>Secret Note 🌙</h3>
          <p>
            Hey Tanu, Tula athavtay apan relationship madhe hoto but doghan madhun ekane pn propose navta kela tevha me tula kasa propose karycha he bghat hoto tevha kahi shayari's bghitlya hotya but me at last college madhe ring dili tevha cha kahi shayari's madhli ek shayari ji aaj pan relate karel. <br /><br />
            Main arzoon to nhi hoon par tu paal ke dekh <br />
            Mohobbatto main koi rasta nikal ke dekh<br />
            Main apne dono taraf ek sa hoon tere liye<br />
            Kisi se shart laga or uchal ke deikh<br />
            Main apne pau ke nakhun se ser ke baalo tak<br />
            faqat tera hoon kahi se bhi khol khal ke dekh😩🤌🏻❤‍🩹<br /><br /> 
            <p style={{textAlign: 'right'}}>— Raj 💌</p>
          </p>
          <button className="btn" onClick={()=>setShowMoonNote(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
