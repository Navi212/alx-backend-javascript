export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const retVal = mathFunction();
    queue.push(retVal);
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
