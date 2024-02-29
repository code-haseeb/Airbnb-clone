
import { SafeListing, SafeUser } from "@/app/types";

interface FavoritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}
