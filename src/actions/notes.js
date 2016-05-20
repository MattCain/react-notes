export const REORDER_NOTES = 'REORDER_NOTES';

export function reorderNotes(newOrder) {
  return {
    type: REORDER_NOTES,
    newOrder
  }
}
