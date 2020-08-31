// You are given two different points on a plane. Each point has its own initial coordinates and own velocity vector
// (in some units per second). The points start moving with given velocities at the same moment in time.
// Will they collide?

export default function pointsCollision(p, q, u, v) {
  // solving simultaneous equation
  // two points positions p, q and velocities u, v respectively
  // 1-D case
  // solve for t:
  // x = p + ut and x = q + vt
  // p + ut = q + vt
  // t(u - v) = q - p
  // t = (q - p)/(u - v)
  // t > 0 implies they will intersect

  // 2-D case:
  // Need to solve for t:
  // x = p_x + u_xt and x = q_x + v_xt
  // y = p_y + u_yt and y = q_y + u_yt
  const deltaX = q[0] - p[0];
  const deltaY = q[1] - p[1];
  const resultantVx = u[0] - v[0];
  const resultantVy = u[1] - v[1];

  console.log(deltaX, deltaY, resultantVx, resultantVy);

  if (resultantVx === 0) {
    if (deltaX !== 0) {
      return false;
    }
    return deltaY / resultantVy >= 0;
  }
  if (resultantVy === 0) {
    if (deltaY !== 0) {
      return false;
    }
    return deltaX / resultantVx >= 0;
  }

  return deltaX / resultantVx >= 0 && deltaY / resultantVy >= 0;
}
