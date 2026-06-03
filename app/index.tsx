import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const handleAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.statusBar} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Nav */}
        <View style={styles.topNav}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <View style={styles.topNavCenter}>
            <Text style={styles.topNavSub}>SARAH_F19</Text>
            <Text style={styles.topNavTitle}>Posts</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.moreIcon}>···</Text>
          </TouchableOpacity>
        </View>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <View style={styles.avatarRing}>
              <Image
                source={{
                  uri: "https://imgs.search.brave.com/m_AxyMoE0zIGSlt8vjdAs5YC1hfjZpdsoNyj6Xy4Brw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/cm9maWxlLXBpYy5q/cGc",
                }}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.postHeaderInfo}>
              <Text style={styles.postUsername}>sarah_f19</Text>
              <Text style={styles.postVia}>via boorgir_sauce420</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.moreIcon}>···</Text>
          </TouchableOpacity>
        </View>
        {/* Post Image */}
        <View style={styles.postImageWrapper}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1779675397130-370aa243cff3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>
        {/* Action Icons */}
        <View style={styles.actions}>
          <View style={styles.actionsLeft}>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionIcon}>
                <Feather name="heart" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionIcon}>
                <FontAwesome5 name="comment" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionIcon}>
                <Ionicons name="paper-plane-outline" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.actionIcon}>
              <FontAwesome5 name="bookmark" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
        {/* Likes */}
        <View style={styles.likesRow}>
          <View style={styles.miniAvatars}>
            <View
              style={[
                styles.miniAvatar,
                { backgroundColor: "#f4a261", left: 0 },
              ]}
            />
            <View
              style={[
                styles.miniAvatar,
                { backgroundColor: "#e76f51", left: 14 },
              ]}
            />
          </View>
          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
            <Text style={styles.bold}>7 others</Text>
          </Text>
        </View>
        {/* Caption */}
        <View style={styles.captionRow}>
          <Text style={styles.captionText}>
            <Text style={styles.bold}>boorgir_sauce420</Text>
            {"  "}Fresh shot on a sunny day! ☀️
          </Text>
        </View>
        {/* View Comments */}
        <TouchableOpacity style={styles.viewComments}>
          <Text style={styles.viewCommentsText}>View all 12 comments</Text>
        </TouchableOpacity>
        {/* Comments */}
        <View style={styles.commentsSection}>
          <View style={styles.commentRow}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>lil_wyatt838</Text>
              {"  "}Awesome tones
            </Text>
          </View>
          <View style={styles.commentRow}>
            <Text style={styles.commentText}>
              <Text style={styles.bold}>pia.in.a.pod</Text>
              {"  "}Gorg. Love it! ❤️
            </Text>
          </View>
        </View>
        {/* Timestamp */}
        <Text style={styles.timestamp}>18 hours ago</Text>
        <View style={{ height: 100 }} />
      </ScrollView>
      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>
            <Feather name="home" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>
            <Feather name="search" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>
            <Octicons name="diff-added" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>
            <Octicons name="video" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.profileNavAvatar} />
        </TouchableOpacity>
      </View>
      {/* Alert Button */}
      <View style={styles.alertBtnWrapper}>
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={handleAlert}
          activeOpacity={0.85}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  statusBar: { height: 44, backgroundColor: "#fff" },
  scrollContent: { paddingBottom: 20 },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  backArrow: { fontSize: 32, color: "#000", lineHeight: 36 },
  topNavCenter: { alignItems: "center" },
  topNavSub: { fontSize: 11, color: "#888", letterSpacing: 0.5 },
  topNavTitle: { fontSize: 15, fontWeight: "700", color: "#000" },
  moreIcon: { fontSize: 18, color: "#000", letterSpacing: 2 },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  postHeaderLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatarRing: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#e1306c",
    overflow: "hidden",
  },
  avatarImage: { width: "100%", height: "100%", borderRadius: 22 },
  postHeaderInfo: { justifyContent: "center" },
  postUsername: { fontSize: 13, fontWeight: "700", color: "#000" },
  postVia: { fontSize: 12, color: "#555", marginTop: 1 },
  postImageWrapper: { width: "100%", aspectRatio: 1 },
  postImage: { width: "100%", height: "100%" },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  actionsLeft: { flexDirection: "row", gap: 16 },
  actionBtn: {},
  actionIcon: { fontSize: 26, color: "#000" },
  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 6,
  },
  miniAvatars: { width: 34, height: 20, position: "relative", marginRight: 8 },
  miniAvatar: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  likesText: { fontSize: 13, color: "#000" },
  bold: { fontWeight: "700" },
  captionRow: { paddingHorizontal: 14, marginBottom: 4 },
  captionText: { fontSize: 13, color: "#000", lineHeight: 18 },
  viewComments: { paddingHorizontal: 14, marginBottom: 4 },
  viewCommentsText: { fontSize: 13, color: "#888" },
  commentsSection: { paddingHorizontal: 14 },
  commentRow: { marginBottom: 3 },
  commentText: { fontSize: 13, color: "#000", lineHeight: 18 },
  timestamp: {
    paddingHorizontal: 14,
    marginTop: 4,
    fontSize: 11,
    color: "#aaa",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navIcon: { fontSize: 24, color: "#000" },
  profileNavAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#ccc",
    borderWidth: 1.5,
    borderColor: "#000",
  },
  alertBtnWrapper: { position: "absolute", bottom: 70, left: 24, right: 24 },
  alertBtn: {
    backgroundColor: "#e1306c",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    elevation: 6,
    shadowColor: "#e1306c",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  alertBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
