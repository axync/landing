export const atmoVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPositionNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const atmoFragmentShader = `
  uniform vec3 color;
  uniform float opacity;
  varying vec3 vNormal;
  varying vec3 vPositionNormal;
  void main() {
    float fresnel = dot(vNormal, vPositionNormal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    float intensity = pow(fresnel, 12.0);
    gl_FragColor = vec4(color, intensity * opacity);
  }
`;
