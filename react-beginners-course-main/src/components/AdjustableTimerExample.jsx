function AdjustableTimer() {
    const [seconds, setSeconds] = useState(0);
    const [intervalMs, setIntervalMs] = useState(1000);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, intervalMs);
  
      return () => clearInterval(interval);
    }, [intervalMs]);
  
    return (
      <div>
        <div>Seconds: {seconds}</div>
        <input
          type="number"
          value={intervalMs}
          onChange={(e) => setIntervalMs(Number(e.target.value))}
        />
  
        <label> Adjust interval (ms)</label>
      </div>
    );
  }