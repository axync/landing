import { snoiseGLSL } from "./shared";

export const sunFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

  ${snoiseGLSL}

  void main() {
    float n = snoise(vPosition * 3.5 + uTime * 0.05);
    n += 0.5 * snoise(vPosition * 7.0 - uTime * 0.08);

    vec3 colorA = vec3(0.95, 0.4, 0.0); 
    vec3 colorB = vec3(1.0, 0.8, 0.2);  
    vec3 colorC = vec3(1.0, 1.0, 0.9); 

    vec3 finalColor = mix(colorA, colorB, smoothstep(-0.5, 0.5, n));
    finalColor = mix(finalColor, colorC, smoothstep(0.4, 1.0, n));
    gl_FragColor = vec4(finalColor * 5.0, 1.0);
  }
`;
