export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];

  try {
    queue.unshift(mathFunction());
    return queue;
  } catch (e) {
    queue.unshift(String(e));
    return queue;
  }
}
