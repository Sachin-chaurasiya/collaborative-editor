import { Editor } from "@tiptap/react";
import styles from "./Toolbar.module.css";

type Props = {
  editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive("bold") ? "is-active" : undefined}
        aria-label="bold"
      >
        <BoldIcon />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive("italic") ? "is-active" : undefined}
        aria-label="italic"
      >
        <ItalicIcon />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        data-active={editor.isActive("strike") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <StrikethroughIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        data-active={editor.isActive("blockquote") ? "is-active" : undefined}
        aria-label="strikethrough"
      >
        <BlockQuoteIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        data-active={undefined}
        aria-label="horizontal-line"
      >
        <HorizontalLineIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive("bulletList") ? "is-active" : undefined}
        aria-label="bullet-list"
      >
        <BulletListIcon />
      </button>

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive("orderedList") ? "is-active" : undefined}
        aria-label="number-list"
      >
        <OrderedListIcon />
      </button>
    </div>
  );
}

function BoldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 25H9V7H17.5C18.5022 7.00006 19.4834 7.28695 20.3277 7.82679C21.172 8.36662 21.8442 9.13684 22.2649 10.0465C22.6855 10.9561 22.837 11.9671 22.7015 12.96C22.5659 13.953 22.149 14.8864 21.5 15.65C22.3477 16.328 22.9645 17.252 23.2653 18.295C23.5662 19.3379 23.5364 20.4485 23.18 21.4738C22.8236 22.4991 22.1581 23.3887 21.2753 24.0202C20.3924 24.6517 19.3355 24.994 18.25 25ZM12 22H18.23C18.5255 22 18.8181 21.9418 19.091 21.8287C19.364 21.7157 19.6121 21.5499 19.821 21.341C20.0299 21.1321 20.1957 20.884 20.3087 20.611C20.4218 20.3381 20.48 20.0455 20.48 19.75C20.48 19.4545 20.4218 19.1619 20.3087 18.889C20.1957 18.616 20.0299 18.3679 19.821 18.159C19.6121 17.9501 19.364 17.7843 19.091 17.6713C18.8181 17.5582 18.5255 17.5 18.23 17.5H12V22ZM12 14.5H17.5C17.7955 14.5 18.0881 14.4418 18.361 14.3287C18.634 14.2157 18.8821 14.0499 19.091 13.841C19.2999 13.6321 19.4657 13.384 19.5787 13.111C19.6918 12.8381 19.75 12.5455 19.75 12.25C19.75 11.9545 19.6918 11.6619 19.5787 11.389C19.4657 11.116 19.2999 10.8679 19.091 10.659C18.8821 10.4501 18.634 10.2843 18.361 10.1713C18.0881 10.0582 17.7955 10 17.5 10H12V14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ItalicIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 9V7H12V9H17.14L12.77 23H7V25H20V23H14.86L19.23 9H25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StrikethroughIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1538 14C17.3846 14.5161 17.5 15.0893 17.5 15.7196C17.5 17.0625 16.9762 18.1116 15.9286 18.867C14.8809 19.6223 13.4335 20 11.5862 20C9.94674 20 8.32335 19.6185 6.71592 18.8555V16.6009C8.23538 17.4783 9.7908 17.917 11.3822 17.917C13.9333 17.917 15.2128 17.1846 15.2208 15.7196C15.2208 15.0939 15.0049 14.5598 14.5731 14.1173C14.5339 14.0772 14.4939 14.0381 14.4531 14H3V12H21V14H17.1538ZM13.076 11H7.62908C7.4566 10.8433 7.29616 10.6692 7.14776 10.4778C6.71592 9.92084 6.5 9.24559 6.5 8.45207C6.5 7.21602 6.96583 6.165 7.89749 5.299C8.82916 4.43299 10.2706 4 12.2219 4C13.6934 4 15.1009 4.32808 16.4444 4.98426V7.13591C15.2448 6.44921 13.9293 6.10587 12.4978 6.10587C10.0187 6.10587 8.77917 6.88793 8.77917 8.45207C8.77917 8.87172 8.99709 9.23796 9.43293 9.55079C9.86878 9.86362 10.4066 10.1135 11.0463 10.3004C11.6665 10.4816 12.3431 10.7148 13.076 11H13.076Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function BlockQuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M11.5 13.375H7.81875C7.93491 12.6015 8.21112 11.8607 8.62974 11.1999C9.04837 10.5391 9.6002 9.97295 10.25 9.5375L11.3688 8.7875L10.6812 7.75L9.5625 8.5C8.6208 9.12755 7.84857 9.97785 7.31433 10.9755C6.7801 11.9731 6.50038 13.0871 6.5 14.2188V18.375C6.5 18.7065 6.6317 19.0245 6.86612 19.2589C7.10054 19.4933 7.41848 19.625 7.75 19.625H11.5C11.8315 19.625 12.1495 19.4933 12.3839 19.2589C12.6183 19.0245 12.75 18.7065 12.75 18.375V14.625C12.75 14.2935 12.6183 13.9755 12.3839 13.7411C12.1495 13.5067 11.8315 13.375 11.5 13.375ZM20.25 13.375H16.5688C16.6849 12.6015 16.9611 11.8607 17.3797 11.1999C17.7984 10.5391 18.3502 9.97295 19 9.5375L20.1188 8.7875L19.4375 7.75L18.3125 8.5C17.3708 9.12755 16.5986 9.97785 16.0643 10.9755C15.5301 11.9731 15.2504 13.0871 15.25 14.2188V18.375C15.25 18.7065 15.3817 19.0245 15.6161 19.2589C15.8505 19.4933 16.1685 19.625 16.5 19.625H20.25C20.5815 19.625 20.8995 19.4933 21.1339 19.2589C21.3683 19.0245 21.5 18.7065 21.5 18.375V14.625C21.5 14.2935 21.3683 13.9755 21.1339 13.7411C20.8995 13.5067 20.5815 13.375 20.25 13.375Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HorizontalLineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <rect x="6.5" y="13.375" width="15" height="1.25" fill="currentColor" />
    </svg>
  );
}

function OrderedListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M14 17.75H22.75V19H14V17.75ZM14 9H22.75V10.25H14V9ZM9 11.5V6.5H7.75V7.125H6.5V8.375H7.75V11.5H6.5V12.75H10.25V11.5H9ZM10.25 21.5H6.5V19C6.5 18.6685 6.6317 18.3505 6.86612 18.1161C7.10054 17.8817 7.41848 17.75 7.75 17.75H9V16.5H6.5V15.25H9C9.33152 15.25 9.64946 15.3817 9.88388 15.6161C10.1183 15.8505 10.25 16.1685 10.25 16.5V17.75C10.25 18.0815 10.1183 18.3995 9.88388 18.6339C9.64946 18.8683 9.33152 19 9 19H7.75V20.25H10.25V21.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BulletListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M8.375 11.5C9.41053 11.5 10.25 10.6605 10.25 9.625C10.25 8.58947 9.41053 7.75 8.375 7.75C7.33947 7.75 6.5 8.58947 6.5 9.625C6.5 10.6605 7.33947 11.5 8.375 11.5Z"
        fill="currentColor"
      />
      <path
        d="M8.375 20.25C9.41053 20.25 10.25 19.4105 10.25 18.375C10.25 17.3395 9.41053 16.5 8.375 16.5C7.33947 16.5 6.5 17.3395 6.5 18.375C6.5 19.4105 7.33947 20.25 8.375 20.25Z"
        fill="currentColor"
      />
      <path
        d="M14 17.75H22.75V19H14V17.75ZM14 9H22.75V10.25H14V9Z"
        fill="currentColor"
      />
    </svg>
  );
}
