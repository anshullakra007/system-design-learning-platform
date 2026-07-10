import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Global System Crash Caught:", error, errorInfo);
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh', 
          backgroundColor: '#0a0a0a', 
          color: '#e5e5e5', 
          padding: '2rem',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          <AlertTriangle size={64} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>System Crash Detected</h1>
          <p style={{ color: '#a3a3a3', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
            A fatal error occurred in the React rendering tree. This is usually caused by a failed JavaScript chunk load or an unhandled null reference.
          </p>
          
          <div style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '1.5rem',
            width: '100%',
            maxWidth: '600px',
            marginBottom: '2rem',
            overflowX: 'auto'
          }}>
            <code style={{ color: '#ef4444', fontSize: '0.9rem' }}>
              {this.state.error?.toString()}
            </code>
          </div>

          <button 
            onClick={this.handleReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            <RefreshCcw size={18} />
            Clear Cache & Hard Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
