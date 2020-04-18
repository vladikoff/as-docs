initSidebarItems({"fn":[["create_synced_bookmark_roots","Sets up the syncable roots. All items in `moz_bookmarks_synced` descend from these roots."],["reset","Removes all sync metadata, including synced bookmarks, pending tombstones, change counters, sync statuses, the last sync time, and sync ID. This should be called when the user signs out of Sync."],["reset_meta","Removes all synced bookmarks and pending tombstones, and forgets the last sync time, without resetting the sync ID. This means the next sync will be treated as a first sync with all new local data. This function should be called from within an open transaction."]]});