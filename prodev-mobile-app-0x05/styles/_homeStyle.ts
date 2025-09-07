// styles/_homestyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  /* ─── Search Section ───────────────────────────────────── */
  searchGroup: {
    marginBottom: 15,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  searchControl: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ─── Filters Section ──────────────────────────────────── */
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
    width: 60,
  },

  /* ─── Listing Section ──────────────────────────────────── */
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },
  paginationContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  showMoreButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#34967C",
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
