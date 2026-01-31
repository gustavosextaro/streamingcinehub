'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateHome() {
  revalidatePath('/');
  revalidatePath('/search'); // Also revalidate search just in case
}
