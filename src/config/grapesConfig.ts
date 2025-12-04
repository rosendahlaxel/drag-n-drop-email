import type grapesjs from 'grapesjs';

export const EMAIL_WIDTH = '600px';

const baseCellStyle = 'padding: 16px; font-family: Inter, Arial, sans-serif; color: #1f2937; font-size: 15px; line-height: 1.6;';

const tableWrapper = (inner: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center"><table role="presentation" cellpadding="0" cellspacing="0" width="${EMAIL_WIDTH}"><tr><td>${inner}</td></tr></table></td></tr></table>`;

export const registerEmailBlocks = (editor: grapesjs.Editor) => {
  const bm = editor.BlockManager;

  bm.add('text', {
    label: 'Text',
    category: 'Content',
    content: tableWrapper(
      `<div style="${baseCellStyle}">Start typing your email copy here. Keep it concise and helpful.</div>`
    ),
  });

  bm.add('image', {
    label: 'Image',
    category: 'Content',
    content: tableWrapper(
      `<div style="${baseCellStyle} text-align:center;"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60" alt="Placeholder" width="560" style="max-width: 100%; border-radius: 12px; display:block; margin: 0 auto;" /></div>`
    ),
  });

  bm.add('button', {
    label: 'Button',
    category: 'Content',
    content: tableWrapper(
      `<div style="${baseCellStyle} text-align:center;">
        <a href="#" style="background:#5b8def;color:#0b1224;padding:14px 22px;border-radius:999px;text-decoration:none;font-weight:700;display:inline-block;">Primary Action</a>
      </div>`
    ),
  });

  bm.add('divider', {
    label: 'Divider',
    category: 'Content',
    content: tableWrapper(
      `<div style="${baseCellStyle} text-align:center;">
        <hr style="border:none;border-top:1px solid #e2e8f0;margin: 8px 0;" />
      </div>`
    ),
  });

  bm.add('spacer', {
    label: 'Spacer',
    category: 'Content',
    content: tableWrapper(`<div style="height:24px;"></div>`),
  });

  bm.add('two-columns', {
    label: '2 Columns',
    category: 'Layouts',
    content: tableWrapper(
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td valign="top" width="50%" style="${baseCellStyle}">
            <p style="margin:0 0 8px;font-weight:700;">Column one</p>
            <p style="margin:0;color:#475569;">Add text, buttons or images inside this column.</p>
          </td>
          <td valign="top" width="50%" style="${baseCellStyle}">
            <p style="margin:0 0 8px;font-weight:700;">Column two</p>
            <p style="margin:0;color:#475569;">Everything is aligned to email-safe tables.</p>
          </td>
        </tr>
      </table>`
    ),
  });

  bm.add('three-columns', {
    label: '3 Columns',
    category: 'Layouts',
    content: tableWrapper(
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td valign="top" width="33.33%" style="${baseCellStyle}">
            <p style="margin:0 0 8px;font-weight:700;">Column</p>
            <p style="margin:0;color:#475569;">Add your copy here.</p>
          </td>
          <td valign="top" width="33.33%" style="${baseCellStyle}">
            <p style="margin:0 0 8px;font-weight:700;">Column</p>
            <p style="margin:0;color:#475569;">Add your copy here.</p>
          </td>
          <td valign="top" width="33.33%" style="${baseCellStyle}">
            <p style="margin:0 0 8px;font-weight:700;">Column</p>
            <p style="margin:0;color:#475569;">Add your copy here.</p>
          </td>
        </tr>
      </table>`
    ),
  });

  bm.add('brand-header', {
    label: 'Header',
    category: 'Brand sections',
    content: tableWrapper(
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0f172a;color:#e2e8f0;">
        <tr>
          <td style="${baseCellStyle} display:flex; align-items:center; gap:12px;">
            <span style="width:40px;height:40px;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;background:#5b8def;color:#0b1224;font-weight:700;">✉️</span>
            <div>
              <p style="margin:0;font-weight:800;">Acme Marketing</p>
              <p style="margin:0;color:#cbd5e1;font-size:14px;">Product updates crafted for you</p>
            </div>
          </td>
          <td style="${baseCellStyle} text-align:right; font-size:14px;">
            <a href="#" style="color:#93c5fd;text-decoration:none;margin-left:12px;">View in browser</a>
            <a href="#" style="color:#93c5fd;text-decoration:none;margin-left:12px;">Help center</a>
          </td>
        </tr>
      </table>`
    ),
  });

  bm.add('brand-footer', {
    label: 'Footer',
    category: 'Brand sections',
    content: tableWrapper(
      `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0f172a;color:#cbd5e1;">
        <tr>
          <td style="${baseCellStyle} text-align:center; font-size:13px;">
            <p style="margin:0 0 8px; color:#e2e8f0; font-weight:700;">Thank you for being with us</p>
            <p style="margin:0 0 6px;">123 Market Street, Suite 150, San Francisco, CA</p>
            <p style="margin:0 0 12px;">You are receiving this email because you opted in at our website.</p>
            <a href="#" style="color:#93c5fd; text-decoration:none; margin-right:12px;">Unsubscribe</a>
            <a href="#" style="color:#93c5fd; text-decoration:none;">Update preferences</a>
            <div style="margin-top:12px;">
              <a href="#" style="color:#e2e8f0; margin: 0 6px; text-decoration:none;">Twitter</a>
              <a href="#" style="color:#e2e8f0; margin: 0 6px; text-decoration:none;">LinkedIn</a>
              <a href="#" style="color:#e2e8f0; margin: 0 6px; text-decoration:none;">Instagram</a>
            </div>
          </td>
        </tr>
      </table>`
    ),
  });
};

export const getGrapesConfig = (container: HTMLElement): grapesjs.EditorConfig => ({
  container,
  fromElement: false,
  height: 'calc(100vh - 180px)',
  width: '100%',
  storageManager: false,
  selectorManager: { componentFirst: true },
  canvas: {
    styles: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'],
  },
  deviceManager: {
    devices: [
      { name: 'Desktop', width: EMAIL_WIDTH, widthMedia: EMAIL_WIDTH },
      { name: 'Full', width: '100%' },
    ],
  },
  plugins: ['grapesjs-preset-newsletter'],
  pluginsOpts: {
    'grapesjs-preset-newsletter': {
      modalLabelImport: 'Paste your HTML',
      modalLabelExport: 'Export email HTML',
      inlineCss: true,
      codeViewerTheme: 'hopscotch',
      resetBlocks: false,
    },
  },
});
