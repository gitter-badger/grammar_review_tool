// Generated from D:/Files/Projects/grammar_review_tool/src/parser/Lemon\LemonLexer.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0014\u0110\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t",
    "\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004",
    "\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b",
    "\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004",
    "\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t",
    "\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004",
    "\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t",
    "\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004",
    "\u001e\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004",
    "#\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0007\u000f\u0085\n\u000f\f\u000f\u000e\u000f\u0088",
    "\u000b\u000f\u0003\u0010\u0003\u0010\u0007\u0010\u008c\n\u0010\f\u0010",
    "\u000e\u0010\u008f\u000b\u0010\u0003\u0011\u0006\u0011\u0092\n\u0011",
    "\r\u0011\u000e\u0011\u0093\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00a1\n\u0013\f\u0013\u000e\u0013\u00a4",
    "\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ae\n\u0014\f\u0014",
    "\u000e\u0014\u00b1\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0006\u0018\u00c3\n\u0018\r\u0018\u000e\u0018\u00c4\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0007\u001b",
    "\u00cd\n\u001b\f\u001b\u000e\u001b\u00d0\u000b\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u00d9\n\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u00dd\n\u001f",
    "\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003",
    "$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003",
    ")\u0003)\u0005)\u00f4\n)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003",
    ",\u0003,\u0007,\u00fe\n,\f,\u000e,\u0101\u000b,\u0003,\u0003,\u0003",
    ",\u0003-\u0003-\u0007-\u0108\n-\f-\u000e-\u010b\u000b-\u0003.\u0003",
    ".\u0003/\u0003/\u0003\u00ff\u00020\u0004\u0003\u0006\u0004\b\u0005\n",
    "\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b\u0016\f\u0018\r\u001a",
    "\u000e\u001c\u000f\u001e\u0010 \u0011\"\u0012$\u0002&\u0002(\u0002*",
    "\u0002,\u0002.\u00130\u00142\u00024\u00026\u00028\u0002:\u0002<\u0002",
    ">\u0002@\u0002B\u0002D\u0002F\u0002H\u0002J\u0002L\u0002N\u0002P\u0002",
    "R\u0002T\u0002V\u0002X\u0002Z\u0002\\\u0002^\u0002\u0004\u0002\u0003",
    "\f\u0003\u0002))\u0003\u0002$$\u0007\u0002$$))11}}\u007f\u007f\u0003",
    "\u00022;\u0003\u00023;\u0003\u0002C\\\u0003\u0002c|\u0004\u0002\u000b",
    "\u000b\"\"\u0006\u0002\f\f\u000e\u000f^^xx\u0004\u0002\f\f\u000f\u000f",
    "\u0106\u0002\u0004\u0003\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002",
    "\u0002\u0002\b\u0003\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002",
    "\u0002\f\u0003\u0002\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002",
    "\u0002\u0010\u0003\u0002\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002",
    "\u0002\u0014\u0003\u0002\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002",
    "\u0002\u0018\u0003\u0002\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002",
    "\u0002\u001c\u0003\u0002\u0002\u0002\u0002\u001e\u0003\u0002\u0002\u0002",
    "\u0002 \u0003\u0002\u0002\u0002\u0002\"\u0003\u0002\u0002\u0002\u0003",
    "$\u0003\u0002\u0002\u0002\u0003&\u0003\u0002\u0002\u0002\u0003(\u0003",
    "\u0002\u0002\u0002\u0003*\u0003\u0002\u0002\u0002\u0003,\u0003\u0002",
    "\u0002\u0002\u0003.\u0003\u0002\u0002\u0002\u00030\u0003\u0002\u0002",
    "\u0002\u0004`\u0003\u0002\u0002\u0002\u0006d\u0003\u0002\u0002\u0002",
    "\bh\u0003\u0002\u0002\u0002\nj\u0003\u0002\u0002\u0002\fn\u0003\u0002",
    "\u0002\u0002\u000er\u0003\u0002\u0002\u0002\u0010t\u0003\u0002\u0002",
    "\u0002\u0012v\u0003\u0002\u0002\u0002\u0014x\u0003\u0002\u0002\u0002",
    "\u0016z\u0003\u0002\u0002\u0002\u0018|\u0003\u0002\u0002\u0002\u001a",
    "~\u0003\u0002\u0002\u0002\u001c\u0080\u0003\u0002\u0002\u0002\u001e",
    "\u0082\u0003\u0002\u0002\u0002 \u0089\u0003\u0002\u0002\u0002\"\u0091",
    "\u0003\u0002\u0002\u0002$\u0097\u0003\u0002\u0002\u0002&\u009c\u0003",
    "\u0002\u0002\u0002(\u00a9\u0003\u0002\u0002\u0002*\u00b6\u0003\u0002",
    "\u0002\u0002,\u00ba\u0003\u0002\u0002\u0002.\u00be\u0003\u0002\u0002",
    "\u00020\u00c2\u0003\u0002\u0002\u00022\u00c6\u0003\u0002\u0002\u0002",
    "4\u00c8\u0003\u0002\u0002\u00026\u00ca\u0003\u0002\u0002\u00028\u00d1",
    "\u0003\u0002\u0002\u0002:\u00d3\u0003\u0002\u0002\u0002<\u00d8\u0003",
    "\u0002\u0002\u0002>\u00dc\u0003\u0002\u0002\u0002@\u00de\u0003\u0002",
    "\u0002\u0002B\u00e0\u0003\u0002\u0002\u0002D\u00e2\u0003\u0002\u0002",
    "\u0002F\u00e4\u0003\u0002\u0002\u0002H\u00e6\u0003\u0002\u0002\u0002",
    "J\u00e8\u0003\u0002\u0002\u0002L\u00ea\u0003\u0002\u0002\u0002N\u00ec",
    "\u0003\u0002\u0002\u0002P\u00ee\u0003\u0002\u0002\u0002R\u00f3\u0003",
    "\u0002\u0002\u0002T\u00f5\u0003\u0002\u0002\u0002V\u00f7\u0003\u0002",
    "\u0002\u0002X\u00f9\u0003\u0002\u0002\u0002Z\u0105\u0003\u0002\u0002",
    "\u0002\\\u010c\u0003\u0002\u0002\u0002^\u010e\u0003\u0002\u0002\u0002",
    "`a\u0005X,\u0002ab\u0003\u0002\u0002\u0002bc\b\u0002\u0002\u0002c\u0005",
    "\u0003\u0002\u0002\u0002de\u0005Z-\u0002ef\u0003\u0002\u0002\u0002f",
    "g\b\u0003\u0002\u0002g\u0007\u0003\u0002\u0002\u0002hi\u00056\u001b",
    "\u0002i\t\u0003\u0002\u0002\u0002jk\u0005@ \u0002kl\u0003\u0002\u0002",
    "\u0002lm\b\u0005\u0003\u0002m\u000b\u0003\u0002\u0002\u0002no\u0007",
    "<\u0002\u0002op\u0007<\u0002\u0002pq\u0007?\u0002\u0002q\r\u0003\u0002",
    "\u0002\u0002rs\u0005L&\u0002s\u000f\u0003\u0002\u0002\u0002tu\u0005",
    "@ \u0002u\u0011\u0003\u0002\u0002\u0002vw\u0005B!\u0002w\u0013\u0003",
    "\u0002\u0002\u0002xy\u0005D\"\u0002y\u0015\u0003\u0002\u0002\u0002z",
    "{\u0005F#\u0002{\u0017\u0003\u0002\u0002\u0002|}\u0005H$\u0002}\u0019",
    "\u0003\u0002\u0002\u0002~\u007f\u0005J%\u0002\u007f\u001b\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0005N\'\u0002\u0081\u001d\u0003\u0002\u0002",
    "\u0002\u0082\u0086\u00058\u001c\u0002\u0083\u0085\u0005>\u001f\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u001f\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0089\u008d\u0005:\u001d\u0002\u008a\u008c\u0005>\u001f\u0002\u008b",
    "\u008a\u0003\u0002\u0002\u0002\u008c\u008f\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e",
    "!\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090",
    "\u0092\u0005R)\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096",
    "\b\u0011\u0002\u0002\u0096#\u0003\u0002\u0002\u0002\u0097\u0098\u0005",
    "@ \u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\b\u0012\u0004",
    "\u0002\u009a\u009b\b\u0012\u0003\u0002\u009b%\u0003\u0002\u0002\u0002",
    "\u009c\u00a2\u0005\\.\u0002\u009d\u009e\u0007^\u0002\u0002\u009e\u00a1",
    "\u0007)\u0002\u0002\u009f\u00a1\n\u0002\u0002\u0002\u00a0\u009d\u0003",
    "\u0002\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003",
    "\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003",
    "\u0002\u0002\u0002\u00a5\u00a6\u0005\\.\u0002\u00a6\u00a7\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\b\u0013\u0004\u0002\u00a8\'\u0003\u0002\u0002",
    "\u0002\u00a9\u00af\u0005^/\u0002\u00aa\u00ab\u0007^\u0002\u0002\u00ab",
    "\u00ae\u0007$\u0002\u0002\u00ac\u00ae\n\u0003\u0002\u0002\u00ad\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ae\u00b1",
    "\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002\u00b1\u00af",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0005^/\u0002\u00b3\u00b4\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\b\u0014\u0004\u0002\u00b5)\u0003\u0002",
    "\u0002\u0002\u00b6\u00b7\u0005X,\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\b\u0015\u0004\u0002\u00b9+\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0005Z-\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\b\u0016\u0004\u0002\u00bd-\u0003\u0002\u0002\u0002\u00be\u00bf",
    "\u0005B!\u0002\u00bf\u00c0\b\u0017\u0005\u0002\u00c0/\u0003\u0002\u0002",
    "\u0002\u00c1\u00c3\n\u0004\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c51\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\t\u0005\u0002\u0002\u00c73\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\t\u0006\u0002\u0002\u00c95\u0003\u0002\u0002\u0002\u00ca",
    "\u00ce\u00054\u001a\u0002\u00cb\u00cd\u00052\u0019\u0002\u00cc\u00cb",
    "\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc",
    "\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf7",
    "\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\t\u0007\u0002\u0002\u00d29\u0003\u0002\u0002\u0002\u00d3\u00d4\t\b",
    "\u0002\u0002\u00d4;\u0003\u0002\u0002\u0002\u00d5\u00d9\u00058\u001c",
    "\u0002\u00d6\u00d9\u0005:\u001d\u0002\u00d7\u00d9\u0007a\u0002\u0002",
    "\u00d8\u00d5\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002",
    "\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d9=\u0003\u0002\u0002\u0002",
    "\u00da\u00dd\u0005<\u001e\u0002\u00db\u00dd\u00052\u0019\u0002\u00dc",
    "\u00da\u0003\u0002\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd",
    "?\u0003\u0002\u0002\u0002\u00de\u00df\u0007}\u0002\u0002\u00dfA\u0003",
    "\u0002\u0002\u0002\u00e0\u00e1\u0007\u007f\u0002\u0002\u00e1C\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u0007]\u0002\u0002\u00e3E\u0003\u0002",
    "\u0002\u0002\u00e4\u00e5\u0007_\u0002\u0002\u00e5G\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0007*\u0002\u0002\u00e7I\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0007+\u0002\u0002\u00e9K\u0003\u0002\u0002\u0002\u00ea",
    "\u00eb\u00070\u0002\u0002\u00ebM\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0007\'\u0002\u0002\u00edO\u0003\u0002\u0002\u0002\u00ee\u00ef\u0007",
    "1\u0002\u0002\u00ef\u00f0\u00071\u0002\u0002\u00f0Q\u0003\u0002\u0002",
    "\u0002\u00f1\u00f4\u0005T*\u0002\u00f2\u00f4\u0005V+\u0002\u00f3\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f4S",
    "\u0003\u0002\u0002\u0002\u00f5\u00f6\t\t\u0002\u0002\u00f6U\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\t\n\u0002\u0002\u00f8W\u0003\u0002\u0002\u0002",
    "\u00f9\u00fa\u00071\u0002\u0002\u00fa\u00fb\u0007,\u0002\u0002\u00fb",
    "\u00ff\u0003\u0002\u0002\u0002\u00fc\u00fe\u000b\u0002\u0002\u0002\u00fd",
    "\u00fc\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u0100",
    "\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0007,\u0002\u0002\u0103\u0104\u00071\u0002\u0002\u0104Y\u0003",
    "\u0002\u0002\u0002\u0105\u0109\u0005P(\u0002\u0106\u0108\n\u000b\u0002",
    "\u0002\u0107\u0106\u0003\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002",
    "\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002",
    "\u0002\u010a[\u0003\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002",
    "\u0002\u010c\u010d\u0007)\u0002\u0002\u010d]\u0003\u0002\u0002\u0002",
    "\u010e\u010f\u0007$\u0002\u0002\u010f_\u0003\u0002\u0002\u0002\u0012",
    "\u0002\u0003\u0086\u008d\u0093\u00a0\u00a2\u00ad\u00af\u00c4\u00ce\u00d8",
    "\u00dc\u00f3\u00ff\u0109\u0006\u0002\u0003\u0002\u0007\u0003\u0002\t",
    "\u0014\u0002\u0003\u0017\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LemonLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LemonLexer.prototype = Object.create(antlr4.Lexer.prototype);
LemonLexer.prototype.constructor = LemonLexer;

LemonLexer.EOF = antlr4.Token.EOF;
LemonLexer.BLOCK_COMMENT = 1;
LemonLexer.LINE_COMMENT = 2;
LemonLexer.INT = 3;
LemonLexer.BEGIN_CODE = 4;
LemonLexer.ASSIGN = 5;
LemonLexer.DOT = 6;
LemonLexer.LBRACE = 7;
LemonLexer.RBRACE = 8;
LemonLexer.LBRACKET = 9;
LemonLexer.RBRACKET = 10;
LemonLexer.LPAREN = 11;
LemonLexer.RPAREN = 12;
LemonLexer.PERCENT = 13;
LemonLexer.TERMINAL = 14;
LemonLexer.NONTERMINAL = 15;
LemonLexer.WS = 16;
LemonLexer.END_CODE = 17;
LemonLexer.CODE_CONTENT = 18;

LemonLexer.Code = 1;

LemonLexer.modeNames = [ "DEFAULT_MODE", "Code" ];

LemonLexer.literalNames = [ null, null, null, null, null, "'::='" ];

LemonLexer.symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "INT", 
                             "BEGIN_CODE", "ASSIGN", "DOT", "LBRACE", "RBRACE", 
                             "LBRACKET", "RBRACKET", "LPAREN", "RPAREN", 
                             "PERCENT", "TERMINAL", "NONTERMINAL", "WS", 
                             "END_CODE", "CODE_CONTENT" ];

LemonLexer.ruleNames = [ "BLOCK_COMMENT", "LINE_COMMENT", "INT", "BEGIN_CODE", 
                         "ASSIGN", "DOT", "LBRACE", "RBRACE", "LBRACKET", 
                         "RBRACKET", "LPAREN", "RPAREN", "PERCENT", "TERMINAL", 
                         "NONTERMINAL", "WS", "NESTED_CODE", "BEGIN_SQUOTED_STRING", 
                         "BEGIN_DQUOTED_STRING", "CODE_BLOCK_COMMENT", "CODE_LINE_COMMENT", 
                         "END_CODE", "CODE_CONTENT", "Digit", "Digit19", 
                         "Int", "Upper", "Lower", "Alpha", "Alphanum", "LBrace", 
                         "RBrace", "LBracket", "RBracket", "LParen", "RParen", 
                         "Dot", "Percent", "DSlash", "Ws", "Hws", "Vws", 
                         "BlockComment", "LineComment", "SQuote", "DQuote" ];

LemonLexer.grammarFileName = "LemonLexer.g4";


LemonLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 21:
		this.END_CODE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

LemonLexer.prototype.END_CODE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

		    this.popMode();
		    if (this._modeStack.length) {
		        this.type = LemonLexer.CODE_CONTENT;
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.LemonLexer = LemonLexer;

