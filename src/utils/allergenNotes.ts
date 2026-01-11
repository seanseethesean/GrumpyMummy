const allergenNotes: Record<string, string> = {
  'Ruby Cheesecake': 'Contains gelatin (beef-derived, non-vegetarian)',
  'Tiramisu SLOP': 'Contains alcohol (can be omitted upon request)',
}

export const getAllergenNote = (itemName: string) => allergenNotes[itemName] ?? null
